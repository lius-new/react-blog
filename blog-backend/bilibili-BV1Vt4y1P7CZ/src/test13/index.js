const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router({ prefix: '/user' });

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next();
})

app.use(router.routes()).use(router.allowedMethods());

// 跨域
router.get('/test-cors', (ctx, next) => {
    ctx.body = {
        data: 'test cors'
    }
});

router.post('/put-file', (ctx, next) => {
    ctx.body = {
        data: 'this is data'
    }
})

app.listen(3000, () => {
    console.log('serve running in 3000 port');
})