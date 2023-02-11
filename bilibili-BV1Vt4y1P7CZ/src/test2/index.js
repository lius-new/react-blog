const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        console.log(error.message);
        ctx.app.emit('error1', error, ctx)
    }
})


app.use(async ctx => {
    throw new Error('customer error');
})

app.on('error', (err) => {
    console.log('error name is :', err.message);
})
app.on('error1', (err) => {
    console.log('error1 name is :', err.message);
})

app.listen(3000, () => {
    console.log('serve run in port -> 3000');
})