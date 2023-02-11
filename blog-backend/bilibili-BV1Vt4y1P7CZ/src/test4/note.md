### koa-onerror

在发生错误的时候,可以返回渲染的页面的结果.最直观的体现在于,报错访问浏览器页面的时候其内容是会显示报错信息的

### app.on

另外可以使用监听全局错误来处理错误

```
app.on('error',err=>{
    console.log('global error', err.message);
})
```

### 通过 try...catch 来捕获错误

```
app.use(async (ctx,next)=>{
    try{
        await next();
    }catch(err){
        console.log(err.message);
        ctx.status = 500;
        ctx.type = 'json';
        ctx.body = {
            message:err.message
        };
        ctx.app.emit('errname',err,ctx);
    }
})
```
