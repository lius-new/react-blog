// 生成图形验证码
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const captcha = require('trek-captcha');
const path = require('path');

const app = new Koa();
const router = new Router();
app.use(static(path.join(__dirname, '/public')));

router.get('/captcha-test', async (ctx, next) => {
    const { buffer } = await captcha({ size: 4 });

    // 生成图片
    ctx.body = buffer;
})

router.get('/hello', async (ctx, next) => {
    ctx.body = 'hello wrold';
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('server running in port: localhost:3000');
})

