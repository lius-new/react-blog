const Router = require('@koa/router');

const router = new Router();


router.get('/', (ctx, next) => {
    ctx.body = '这个是首页: ';
})



module.exports = router;