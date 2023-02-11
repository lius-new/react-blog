const koa = require('koa');
const koaLogger = require('koa-logger');
const app = new koa();

app.use(koaLogger());

app.use(async (ctx, next) => {
    ctx.type = 'json'

    ctx.body = {
        message: 'this is test',
    }
})

app.listen(3000, () => {
    console.log('serve run in port:3000');
})

