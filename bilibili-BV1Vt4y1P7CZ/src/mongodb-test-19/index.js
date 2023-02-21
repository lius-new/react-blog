const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const mongod = require('./db/index.js');
const ObjectId = require('mongodb').ObjectId;
const path = require('path');

const app = new Koa();
const router = new Router({ prefix: '/students' });

app.use(bodyParser());
app.use(koaStatic(path.join(__dirname, '/public')));

router.get('/', async (ctx, next) => {
    let { pageSize, pageIndex } = ctx.query;
    [pageSize, pageIndex] = [parseInt(pageSize), parseInt(pageIndex)];
    console.log(pageIndex, pageSize);
    const students = await mongod.collection('students')
    const limitStudents = await students.find().skip((pageIndex - 1) * pageSize).limit(pageSize).toArray();
    const countStudent = await students.countDocuments();
    ctx.body = {
        ok: 1,
        data: limitStudents,
        count: countStudent,
    }
})

router.delete('/', async (ctx, next) => {
    let _id = ctx.request.body.id;
    const students = await mongod.collection('students');
    const res = await students.deleteOne({ _id: new ObjectId(_id) });
    const countStudent = await students.countDocuments();
    const suc = res.deletedCount === 1;
    ctx.body = {
        ok: 1,
        msg: suc ? '删除成功' : '删除失败',
        count: countStudent,
        body: ctx.request.body
    }
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('server running in port:3000');
})
