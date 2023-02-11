## session 的简答的使用

koajs 中使用 session 需要配合 koa-session 包.

### 安装

```
npm install koa-session
```

### 简单的使用

```
const session = require('koa-session');

const CONFIG = {
    key: 'wc', /** (string) cookie key (default is koa.sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000, // 有效期
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, // 仅服务端修改
    signed: true, /** 签名cookie (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: false, /** (boolean) secure cookie*/
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
}
app.use(session(CONFIG,app));

app.use(async (ctx)=>{
    if (ctx.path === '/favicon.ico') return;
    let viewCount = ctx.session.count || 0;
    ctx.session.count = ++viewCount;
    ctx.body = 'view count : ' + viewCount;
})
```
1. 首先导入了koa-session pakcage
2. 配置koa-sessoin的配置
3. 通过koa中间件测试session