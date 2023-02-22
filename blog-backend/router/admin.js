const config = require('../config');
const AdminRouter = require('@koa/router')
const jwtAuth = require('koa-jwt');
const AdminController = require('../controller/AdminController')

const adminRouter = new AdminRouter({ prefix: '/admin' });

adminRouter.post('/register', AdminController.register);
adminRouter.post('/delete', AdminController.deleteAdmin);
adminRouter.post('/login', AdminController.login);
adminRouter.post('/logout', jwtAuth({ secret: config.secretKey }), AdminController.logout);

module.exports = adminRouter;
