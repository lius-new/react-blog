const config = require('../config');
const jwt = require('jsonwebtoken');
const AdminService = require('../models/AdminModel');
const { Result, EnumCode } = require('../core/result');

class AdminController {
    // 注册
    static async register(ctx, next) {
        // TODO: 校验
        let body = ctx.request.body;
        if ((await AdminService.getUser(body.username)).length > 0) {
            ctx.body = Result.ResultCodeMsg(EnumCode.REGISTER_ERROR);
        } else {
            await AdminService.saveUser({ username: body.username, password: body.password });
            ctx.body = Result.ResultCodeMsg(EnumCode.REGISTER_SUCCESS);
        }
    }

    // 删除
    static async deleteAdmin(ctx, next) {
        // TODO: 校验
        let body = ctx.request.body;
        const deleteInfo = await AdminService.deleteUser(body.id);
        ctx.body = deleteInfo.deletedCount && deleteInfo.deletedCount > 0
            ? Result.ResultCodeMsg(EnumCode.DELETE_SUCCESS) : Result.ResultCodeMsg(EnumCode.DELETE_ERROR);
    }


    static async login(ctx, next) {
        // TODO: 校验
        let body = ctx.request.body;
        const currentUser = await AdminService.getUser(body.username);

        if (currentUser.length === 0) {
            ctx.body = Result.ResultCodeMsg({ code: EnumCode.LOGIN_ERROR.code, msg: '用户不存在' });
        } else {
            if (currentUser[0].username === body.username && currentUser[0].password === body.password) {
                let token = jwt.sign({ id: currentUser._id, exp: Math.floor(Date.now() / 1000) + 60 }, config.secretKey); //生成token
                ctx.body = Result.ResultCodeMsg(EnumCode.LOGIN_SUCCESS);
                console.log(token);
            } else {
                ctx.body = Result.ResultCodeMsg({ code: EnumCode.LOGIN_ERROR.code, msg: '密码错误' });
            }
        }
    }

    static async logout(ctx, next) {
        ctx.body = Result.ResultCodeMsg(EnumCode.LOGOUT_SUCCESS);
    }
}

module.exports = AdminController;