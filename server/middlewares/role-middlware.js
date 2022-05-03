const ApiError = require('../exceptions/api-error');
const jwt = require('jsonwebtoken');

module.exports =  function(roles) {
    return function(req, res, next){
        try {
            const authorizationHeader = req.headers.authorization;
            if(!authorizationHeader) {
                return next(ApiError.UnauthorizedError());
            }

            const accessToken = authorizationHeader.split(' ')[1];
            if(!accessToken){
                return next(ApiError.UnauthorizedError())
            }

            /*const userData = tokenService.validateAccessToken(accessToken);
              if(!userData){
              return next(ApiError.UnauthorizedError())
              }

              req.user = userData;
              next()
              }*/

            const {roles: userRoles} = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
            let hasRole = false
            userRoles.forEach(role => {       //незн в чем проблема
                if ( roles.includes(role) ) {
                    hasRole = true;
                }
            })
            if (!hasRole) {
                return next(ApiError.PermissionsError());
            }
            next();
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: 'Непредвиденная ошибка'})
        }
    }
};