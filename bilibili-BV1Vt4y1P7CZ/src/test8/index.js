// 静态资源的托管
const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();


app.use(static(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log(__dirname, static(__dirname, './public'));
    console.log('serve running of : 3000');
})