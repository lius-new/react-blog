// 日志持久化
const koa = require('koa');
const onerror = require('koa-onerror');
const { accessLogger, logger } = require('./logger')

const app = new koa();
onerror(app);
app.use(accessLogger())

app.use(async (ctx, next) => {
    ctx.throw(401, '未授权', {
        data: 'hello world',
    })
})
app.on('error', err => {
    console.log('global error -> ', err.message);
})

app.listen(3000, () => {
    console.log('serve run in port: 3000 ');
})