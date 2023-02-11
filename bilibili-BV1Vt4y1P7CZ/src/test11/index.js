const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser')
const session = require('koa-session');

const app = new Koa();
const router = new Router({ prefix: '/user' });

app.keys = ['hello world'];

const CONFIG = {
    key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: false, /** (boolean) secure cookie*/
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};

app.use(session(CONFIG, app));

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());


// 登录接口
router.post('/login', (ctx, next) => {
    let { body } = ctx.request;
    ctx.session.userInfo = { ...body }; // 存储用户名
    console.log(ctx.session);
    ctx.body = {
        ok: 1,
        message: '登录成功'
    }
})

// 退出登口接口
router.post('/logout', (ctx, next) => {
    ctx.session.userInfo = null;
    ctx.body = {
        ok: 1,
        message: '退出登录'
    }
})

// 获取用户信息
router.get('/getUser', require('./auth'), (ctx, next) => {
    ctx.body = {
        ok: 1,
        message: '查看用户信息',
        userInfo: { ...ctx.session.userInfo }
    }
})

app.listen(3000, () => {
    console.log('serve runnig in port: 3000');
})