const userService = require('../service/user-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const multer = require("multer");
const upload = require("../middlewares/upload");

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            }
            const { email, password } = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData);
        } catch (e) {
            //console.log(e);
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login(email, password);
            console.log('userData', userData)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.API_URL);
        } catch (e) {
            next(e);
            //console.log(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);
            console.log('userData', userData)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers()
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async postProducts(req, res, next) {
        try {

            const test = await upload(req, res);
            console.log(`test`, test);
            console.log(`rea.files`, req.files);

            if (req.files.length <= 0) {
                return res
                    .status(400)
                    .send({ message: "You must select at least 1 file." });
            }

            return res.status(200).send({
                message: "Files have been uploaded.",
                files: req.files
            });
            // console.log(`JSON.stringify(req)`, JSON.stringify(req.body));
            // const { name, price, description } = req.body;
            // const productData = await userService.postProducts(name, price, description);
            // return res.json(productData);
            /*const storage = multer.diskStorage({
                destination: (req, file, callback) => {
                    callback(null, "./client/public/uploads/");
                },
                filename: ( req, file, callback) => {
                    callback(null, file.originalname);
                }
            })
            const upload = multer({storage: storage});

            const products = await userService.postProducts(upload.single("productImage"));*///добавить надо что-то...

            //return res.json(products);
        } catch (e) {
            next(e);
        }
    }

    async getProducts(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();
