const MongoClient = require('mongodb').MongoClient;

; (async function () {

    const client = new MongoClient('mongodb://192.168.236.100:27017');
    await client.connect();
    console.log('连接成功');

    const db = await client.db('school');
    const gradel = await db.collection('gradel');

    // 更新数据
    let res = await gradel.updateOne({ name: 'zhangsan', age: { $gt: 20 } }, {
        $set: {
            name: 'zhaoliu'
        }
    });

    // 删除数据
    res = await gradel.deleteOne({ name: 'zhangsan' });

    res = await gradel.find().toArray();
    console.log(res);

    client.close();
})();