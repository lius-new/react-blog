const TestRouter = require('@koa/router')

const testRouter = new TestRouter({ prefix: '/test' });

testRouter.get('/', (ctx, next) => {
    ctx.body = 'this is test';
})

module.exports = testRouter;
