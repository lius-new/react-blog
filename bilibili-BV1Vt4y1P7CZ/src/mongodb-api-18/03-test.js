const MongoClient = require('mongodb').MongoClient;

; (async function () {

    const client = new MongoClient('mongodb://192.168.236.100:27017');
    await client.connect();
    console.log('连接成功');

    const db = await client.db('school');
    const gradel = await db.collection('gradel');

    // limit(number) 多少条
    let users = await gradel.find().limit(2).toArray();
    console.log(users);

    // skip(number) 跳过多少数据
    users = await gradel.find().skip(3).limit(3).toArray();
    console.log(users);

    // 通过skip和limit可以来配合跳过多少数据

    let page = 1;
    let pageSize = 3;
    await gradel.find().skip(pageSize * (page - 1)).limit(pageSize);

    // sort 排序, 1 表示正序 -1表示逆序，
    let res = await gradel.find().sort({
        age: -1 // 根据age排序
    })

    client.close();
})();