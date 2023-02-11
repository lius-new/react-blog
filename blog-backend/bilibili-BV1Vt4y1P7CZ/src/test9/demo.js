// 统计网站的使用次数, 没有cookie的即为第一次访问
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

let count = 0;

router.get('/hello', (ctx, next) => {
    ctx.body = 'hello world';
})

router.get('/count', (ctx, next) => {
    let username = ctx.query.username;
    if (!username) {
        ctx.redirect('hello');
        ctx.status = 301
        return;
    }

    let username_ = ctx.cookies.get('username');
    if (username !== username_) {
        username = ctx.query.username;
        ctx.cookies.set('username', username)
        count++;
    }

    ctx.body = `count:${count}`;
})

app.listen(3000, () => {
    console.log('serve running port of: 3000')
})