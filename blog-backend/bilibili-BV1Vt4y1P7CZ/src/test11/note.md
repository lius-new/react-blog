### session 的简单的使用

```
ctx.session.[key] = value
```
向session存储内容

### 利用koa机制来实现权限鉴定

```
router.get('/getUser', require('./auth'), (ctx, next) => {
    ctx.body = {
        ok: 1,
        message: '查看用户信息',
        userInfo: { ...ctx.session.userInfo }
    }
})
```