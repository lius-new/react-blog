const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const routerIndex = require('./router/index');
const routerUser = require('./router/user');

const app = new Koa();
app.use(bodyParser());

app.use(routerIndex.routes()).use(routerIndex.allowedMethods());
app.use(routerUser.routes()).use(routerUser.allowedMethods());

app.listen(3000, () => {
    console.log('server running in port: 3000');
})