const Router = require('@koa/router');

const router = new Router();


router.get('/cart', (ctx, next) => {
    ctx.body = '购买商品';
})

module.exports = router;