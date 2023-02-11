const koa = require('koa');
const onerror = require('koa-onerror');
const app = new koa();

onerror(app, 'hello world');

app.use(async (ctx, next) => {
    // ------------------------
    // let err = new Error('未授权,不访问呢');
    // err.status = 401;
    // throw err;
    // ------------------------

    ctx.throw(401, '未授权,不允许访问', { user: { name: 'foo' } })

})

app.on('error', (err) => {
    console.log('全局错误', err.message);

})

app.listen(3000, () => {
    console.log('serve running in port: 3000');
})
