// 重定向

const Koa = require('koa');
const Router = require('@koa/router')
const app = new Koa();
const router = new Router();


app.use(router.routes()).use(router.allowedMethods())

router.get('/hello', ctx => {
    ctx.body = 'hello world';
    ctx.redirect('login-in');
    ctx.status = 301;
})

router.get('/login-in', ctx => {
    ctx.type = 'json';
    ctx.body = {
        name: '张三',
        age: 10
    }
})

app.listen(3000, () => {
    console.log('serve running in port: 3000');
})