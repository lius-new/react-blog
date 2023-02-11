## 跨域解决

### 后端

1. 使用 koa-cors

```
const cors = require('koa-cors');
app.use(cors());
```

问题是 koa-cors 版本太低,提示`koa deprecated Support for generators will be removed in v3. See the documentation for examples of how to convert old middleware`. 但是实际上没有问题

2. 写个中间件

```
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next();
})
```

设置 ctx 的`Access-Control-Allow-Origin`属性未
