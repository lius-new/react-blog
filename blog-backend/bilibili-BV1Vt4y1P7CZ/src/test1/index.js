const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    console.log('-> 1');
    await next();
    console.log('-> 2');
})

app.use(async (ctx, next) => {
    ctx.status = 400;
    ctx.body = {
        message: 'body is: hello world',
    }
    console.log('-> 5');
    await next();
    console.log('-> 6');
})

app.use(async (ctx, next) => {
    console.log('-> 3');
    await next();
    console.log('-> 4');
})

app.listen(3000, () => {
    console.log('serve running in 3000');
})
