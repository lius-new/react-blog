### 错误处理

```
app.on('errorname',(err)=>{
    console.log(err);
});
```

通过 app.on()可以监听到发生异常的代码. errorname 目前好像为 error 的时候,其才会生效. 在其他的时候可能要通过主动触发`ctx.app.emit()`的方式.
