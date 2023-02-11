## jwt+token 权限鉴定

### 核心使用的 package

```
jsonwebtoken
koa-jwt
```

### 逻辑

1. 首先用户(客户端)提交数据,后台收到数据
2. 将收到的数据进行加密,并生成 token, (不要加密敏感信息)
3. 将加密的数据响应到客户端
4. 客户端后面调用接口则需要验证了(鉴权).

### 具体的实现

- 步骤 1

```
let userInfo = ctx.request.body.user;
```

获取数据

- 步骤 2

```
let token = jwt.sign({
    data: userInfo, // 数据
    exp: Math.floor(Date.now() / 1000) + 60, // 过期的时间
}, secret /* 密钥 */)
```

对数据加密

- 步骤 3

```
ctx.body = {
    ok: 0,
    msg: '登录成功',
    user: { userInfo },
    token
}
```

将数据响应到客户端(token 会自动的写到请求头中)

步骤 4

```
router.get('/getUser', jwtAuth({ secret }), async (ctx, next) => {
```

`jwtAuth`中间件进行验证
