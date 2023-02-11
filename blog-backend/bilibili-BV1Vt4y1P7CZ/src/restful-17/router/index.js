const Router = require('@koa/router');
const router = new Router({ prefix: '' })

router.get('/', (ctx, next) => {
    ctx.body = '欢迎访问';
})



module.exports = router;