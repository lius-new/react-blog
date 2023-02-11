const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.prefix('/user');

router.get('/list', (ctx, next) => {
    // ctx.cookies.set('username', "zhangsan", {
    //     maxAge: 60 * 60 * 24
    // });
    ctx.body = '用户列表';
})

route.get('/add', (ctx, next) => {
    console.log(ctx.cookies.get('username'))
    ctx.body = '添加用户';
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('serve running port of : 3000');
})