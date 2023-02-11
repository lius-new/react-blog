### 路由

使用[@koa/router](https://github.com/koajs/router/blob/HEAD/API.md) 来实现路由

### 简单的使用

```
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
// const router = new Router();
const router = new Router({
    prefix: '/categories'
});

router.get('/',(ctx,next)=>{
    ctx.body = 'this is test';
})


app.use(router.routers()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('serve running on port : 3000');
})
```

### 获取参数

#### Get

- query

获取请求请求链接上的参数`/user?name='zhangsan'`

```
router.get('/query-user', (ctx, next) => {
    console.log(ctx.query);
    ctx.body = `查询用户 `;
})
```

- params

获取请求请求链接上的参数`/user/1`

```
router.get('/:id', (ctx, next) => {
    ctx.body = `获取用户 ${ctx.params.id}`;
})

```

#### Post

post方法传参需要使用`koa-bodyparser`包来配合内容的解析

```
app.use(bodyParser()); // 在加载router之前
app.use(router.routers()).use(router.allowedMethods());

// --------------------------
router.post('/', (ctx, next) => {
    console.log(ctx.request.body); // 获取post请求体的内容
})
```
