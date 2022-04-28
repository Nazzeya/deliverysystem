const UserModel = require('../models/user-model');
const RoleModel = require('../models/roles-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
            //throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user); //id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto}
    }

    async activate(activationLink){
        const user = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.BadRequest('Неккоректная ссылка активации')
            //throw new Error('Неккоректная ссылка активации')
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email, password){
        const user = await UserModel.findOne({email});
        console.log('email',email);
        console.log('password',password);
        if(user){
            const isPassEquals = await bcrypt.compare(password, user.password); //функция проверяет совпадают ли захешированные пароли
            //не видит candidate.password(((, потом решишь проблему!
            //чет не решается, :(
            if (!isPassEquals){
                throw ApiError.BadRequest('Некорректный пароль');
            }
            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({...userDto});

            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {...tokens, user: userDto}
        }
        //не пойму почему, юзер сохранился в базе, а постман говорит что он не найден
        else{
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers(){
        const users = await UserModel.find();
        return users;
    }
}

module.exports = new UserService();
