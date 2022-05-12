const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const uploadController = require('../controllers/upload');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const roleMiddleware = require('../middlewares/role-middlware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.post('/postProducts', roleMiddleware(['ADMIN']), userController.postProducts); //roleMiddleware(["ADMIN"]),
router.get('/products', userController.getProducts);

router.get('/getListFiles', uploadController.getListFiles);
router.get('/download', uploadController.download);

module.exports = router