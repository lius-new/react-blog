// jwt鉴权
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const jwt = require('jsonwebtoken');
const jwtAuth = require('koa-jwt');

const secret = '1234567';
const app = new Koa();
const router = new Router({
    prefix: '/user'
});

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

router.post('/login', (ctx, next) => {
    // 1.获取用户信息
    let userInfo = ctx.request.body.user;
    // 2.生成token, 不要存放 敏感信息
    let token = jwt.sign({
        data: userInfo, // 数据
        exp: Math.floor(Date.now() / 1000) + 60, // 过期的时间
    }, secret /* 密钥 */)
    console.log(token);

    // 3. 给客户端响应数据
    ctx.body = {
        ok: 0,
        msg: '登录成功',
        user: { userInfo },
        token
    }
})

router.post('/logout', (ctx, next) => {
    ctx.state.user = null;
    ctx.body = '登出'; // 删除令牌
})

router.get('/getUser', jwtAuth({ secret }), async (ctx, next) => {
    ctx.body = {
        user: { ...ctx.state.user },
        msg: '获取用户信息',
    }
})


app.listen(3000, () => {
    console.log('serve running in port: 3000');
})