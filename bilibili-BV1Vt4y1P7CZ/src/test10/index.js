const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();

function RouterStart(app, prefix, routes) {
    const Router = require('@koa/router');
    const router = new Router();
    router.prefix(`/${prefix}`);
    app.use(router.routes()).use(router.allowedMethods());

    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        if (route.type === 'get') {
            router.get(route.path, route.func);
        }
    }
}

RouterStart(app, 'user', [
    {
        type: 'get', path: '/list', func: (ctx, next) => {
            ctx.body = '获取用户列表';
        }
    },
    {
        type: 'get', path: '/add', func: (ctx, next) => {
            ctx.body = '添加用户';
        }
    },
    {
        type: 'get', path: '/login', func: (ctx, next) => {
            ctx.body = '用户登录';
        }
    }
])

app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'wc', /** (string) cookie key (default is koa.sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000, // 有效期
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, // 仅服务端修改
    signed: true, /** 签名cookie (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: false, /** (boolean) secure cookie*/
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};
app.use(session(CONFIG, app));

app.use(async ctx => {
    if (ctx.path === '/favicon.ico') {
        return;
    }
    let viewCount = ctx.session.count || 0;
    ctx.session.count = ++viewCount;
    ctx.body = viewCount + 'views';
})

app.listen(3000, () => {
    console.log('serve runnig in port: 3000');
})