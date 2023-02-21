const MongoClient = require('mongodb').MongoClient;

; (async function () {
    const client = new MongoClient('mongodb://192.168.236.100:27017');
    // 链接客户端
    await client.connect();
    console.log('连接成功');

    // 获取数据库
    const db = client.db('school');
    console.log('db:', db);

    // 获取集合
    const gradel = db.collection('gradel');

    // 插入一条数据
    await gradel.insertOne({
        name: '张三',
        age: 20,
        hobby: ['吃饭', '睡觉'],
        score: 90
    })

    // 插入多条数据
    await gradel.insertMany([
        {
            name: '李四',
            age: 20,
            hobby: ['吃饭', '睡觉'],
            score: 90
        },
        {
            name: '王五',
            age: 20,
            hobby: ['吃饭', '睡觉'],
            score: 90
        },
    ])

    // 关闭客户端的连接
    client.close();
})()