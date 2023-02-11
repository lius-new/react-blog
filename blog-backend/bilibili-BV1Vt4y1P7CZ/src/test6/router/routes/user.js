const Router = require('@koa/router');

const router = new Router();

router.prefix('/user')


router.get('/', (ctx, next) => {
    ctx.body = '获取用户列表';
})

// query 传参数
router.get('/query-user', (ctx, next) => {
    console.log(ctx.query);
    ctx.body = `获取用户 ${ctx.params.id}`;
})

// params 传参数
router.get('/:id', (ctx, next) => {
    ctx.body = `获取用户 ${ctx.params.id}`;
})

router.post('/', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = `添加用户${ctx.request.body.id}`;
})

module.exports = router;