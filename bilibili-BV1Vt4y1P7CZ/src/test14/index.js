const Koa = require('koa');
const { koaBody } = require('koa-body');
const path = require('path');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router({
    prefix: '/test'
});
app.use(koaBody({
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: path.join(__dirname, 'upload'),
        keepExtensions: true,// 保留扩展名
    }
}))

router.get('/hello', (ctx, next) => {
    ctx.body = {
        msg: 'this is test'
    }
})

router.post('/upload', async (ctx, next) => {
    const file = ctx.request.files;
    ctx.body = {
        ok: 1,
        file: file
    }
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('serve running in port 3000');
})
