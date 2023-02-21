const MongoClient = require('mongodb').MongoClient;

; (async function () {

    const client = new MongoClient('mongodb://192.168.236.100:27017');

    await client.connect();
    console.log('连接mongodb成功');

    const db = await client.db('school');
    const gradel = await db.collection('gradel');

    // 查找所有的数据
    // let users = await gradel.find().toArray();
    // console.log(users);

    // 查找岁数大于21的
    let users1 = await gradel.find({
        age: {
            //  gt:大于/lt:小于/gte:大于等于/lte:小于等于
            $gte: 21
        }
    }).toArray();

    console.log("uesr1", users1);

    // 查找单条名字等于张三
    // let user = await gradel.findOne({ name: '张三' });
    // console.log(user);

    // 找name=王五，age是20
    let userWw20 = await gradel.find({
        name: '王五',
        age: 20
    }).toArray();

    // 查找姓名为张三或者年龄为20的人
    let userZs20 = await gradel.find({
        $or: [
            { name: '张三' },
            { age: 20 }
        ]
    }).toArray();

    // 查找年龄不大于20岁并且年龄不小于16岁的人
    let userNot20Not16 = await gradel.find({
        $nor: [
            { age: { $gt: 20 } },
            { age: { $lt: 16 } },
        ]
    }).toArray();

    // 正则表达式
    let userRegx = await gradel.find({
        name: {
            $regex: /^张/,
        }
    }).toArray();

    // all size in
    let userAll = await gradel.find({
        hobby: {
            $all: ['妹子']
        }
    }).toArray();
    let userIn = await gradel.find({
        hobby: {
            $in: ['妹子', '睡觉']
        }
    }).toArray();
    let userAllAndOr = await gradel.find({
        hobby: {
            // 长度
            $size: 3
        }
    }).toArray();




    // 关闭连接
    client.close();
})();