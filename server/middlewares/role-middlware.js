const ApiError = require('../exceptions/api-error');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user-model');


module.exports = function (roles) {
    return async function (req, res, next) {
        try {
            const authorizationHeader = req.headers.authorization;
            if (!authorizationHeader) {
                return next(ApiError.UnauthorizedError());
            }

            const accessToken = authorizationHeader.split(' ')[1];
            if (!accessToken) {
                return next(ApiError.UnauthorizedError())
            }

            /*const userData = tokenService.validateAccessToken(accessToken);
              if(!userData){
              return next(ApiError.UnauthorizedError())
              }

              req.user = userData;
              next()
              }*/
            console.log(`accessToken`, accessToken);
            const userRoles = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
            console.log(`userRoles`, userRoles);
            console.log(`roles`, roles);
            let hasRole = false
            const _user = await UserModel.findOne({ email: userRoles.email })
            console.log(`_user`, _user);
            if (_user.roles.includes(roles[0]))
                hasRole = true;

            if (!hasRole) {
                return next(ApiError.PermissionsError());
            }
            next();
        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: 'Непредвиденная ошибка' })
        }
    }
};