## nodejs/mongod

通过 js 来操作 mongodb

### 基本的格式

```
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

    // 执行操作的todo...

    // 关闭客户端的连接
    client.close();
})();
```

### 基本使用方式

下面的代码都是基于 todo 中的代码

- 查找数据

查找所有的数据，并将其转换为数组

```
await gradel.find().toArray()
```

- 查找岁数大于 21 的数据

```
await gradel.find({
    age: {
        $gte: 21
    }
}).toArray();
```

    - gt:大于
    - lt:小于
    - gte:大于等于
    - lte:小于等于

- 查找 name=张三的单条数据数据

```
await gradel.findOne({ name: '张三' });

// await gradel.find({ name: '张三' }); // 名字为张三的多条数据
```

- 查找 name=王五，age=20

```
await gradel.find({
    name: '王五',
    age: 20
}).toArray();
```

- 查找年龄不大于 20 岁并且年龄不小于 16 岁的人

```
await gradel.find({
    $nor: [
        { age: { $gt: 20 } },
        { age: { $lt: 16 } },
    ]
}).toArray();
```

- 正则表达式查找

```
await gradel.find({
    name: {
        $regex: /^张/,
    }
}).toArray();
```

- 查找爱好是'妹子'的数据

```
let userAll = await gradel.find({
    hobby: {
        $all: ['妹子']
    }
}).toArray();
```

- 查找爱好包括'妹子,睡觉'的数据

```
let userIn = await gradel.find({
    hobby: {
        $in: ['妹子', '睡觉']
    }
}).toArray();
```

- 查找长度为 3 的数据

```
let userAllAndOr = await gradel.find({
    hobby: {
        // 长度
        $size: 3
    }
}).toArray();
```

- 只要前 2 条数据

```
await gradel.find().limit(2).toArray();
```

- 跳过 2 条数据

```
await gradel.find().skip(3).toArray();
```

- 分页

```
let page = 1;
let pageSize = 3;
await gradel.find().skip(pageSize * (page - 1)).limit(pageSize);
```

- 排序

1 表示正序 -1表示逆序，

```
await gradel.find().sort({
    age: -1 // 根据age排序
})
```

- 更新数据

更新名字为zhangsan,age大于20的name为zhaoliu

```
await gradel.updateOne({ name: 'zhangsan', age: { $gt: 20 } }, {
    $set: {
        name: 'zhaoliu'
    }
});
```

- 删除数据
删除name=zhangsan的数据
```
await gradel.deleteOne({ name: 'zhangsan' });
```