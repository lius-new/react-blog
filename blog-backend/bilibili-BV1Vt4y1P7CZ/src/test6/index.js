// koa-router / get方法(get获取请求参数) / post方法(post获取请求参数)
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const { initRouter } = require('./router')

const app = new Koa();


app.use(bodyParser());
initRouter(app);


app.listen(3000, () => {
    console.log('serve running in port : 3000');
})