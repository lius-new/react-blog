const Koa = require('koa');
const Router = require('@koa/router');
const bouncer = require('koa-bouncer');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(bouncer.middleware());

router.get('/hello', async (ctx, next) => {
    console.log('hello world');
    ctx.body = {
        msg: 'hello world'
    }
})
router.post('/form-checker', async (ctx, next) => {
    try {
        ctx.validateBody('name').required('username 是必传参数').isString().trim();
    } catch (error) {
        if (error instanceof bouncer.ValidationError) {
            ctx.status = 400;
            ctx.body = {
                ok: 0,
                msg: '校验失败' + error.message
            };
            return;
        }
        throw error;
    }
    ctx.body = JSON.stringify(ctx.vals);
})

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => {
    console.log('serve running in port: 3000');
})
