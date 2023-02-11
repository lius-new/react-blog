const Router = require('@koa/router');
const router = new Router({ prefix: '/user' })


let users = [
    {
        id: 1,
        name: 'wc', age: 18
    },
    {
        id: 2,
        name: 'xq',
        age: 28
    }
];

// query / param
router.get('/query-user-by', (ctx, next) => {
    let name = ctx.query.name;
    console.log(name);
    ctx.body = { user: users.filter(u => u.name === name) };
});
router.get('/:id', (ctx, next) => {
    let id = parseInt(ctx.params.id);
    ctx.body = { user: users.filter(u => u.id === id) };
});

router.post('/', (ctx, next) => {
    const { name, age } = ctx.request.body;
    console.log(ctx.request.body);
    users.push({ id: users.length + 1, name, age });
    ctx.body = { users };
});
router.put('/', (ctx, next) => {
    const { id, name, age } = ctx.request.body;
    const index = users.findIndex(u => u.id === parseInt(id));
    users[index]['name'] = name;
    users[index]['age'] = age;
    ctx.body = { users, msg: '修改成功' };
});

router.delete('/', (ctx, next) => {
    const { id } = ctx.request.body;
    const index = users.findIndex(u => u.id === parseInt(id));
    users.splice(index, 1)
    console.log(users);
    ctx.body = { users, msg: '修改成功' };
});

router.get('/', (ctx, next) => {
    ctx.body = { users }
})

module.exports = router;