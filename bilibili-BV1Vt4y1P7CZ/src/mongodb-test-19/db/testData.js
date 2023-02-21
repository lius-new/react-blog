const mongodb = require('./index.js');

mongodb.once('connect', async () => {
    const students = await mongodb.collection('students');

    // 插入数据
    try {
        await students.deleteMany(); // 首先删除数据
        await students.insertMany([
            { 'name': '张三', 'age': 20, 'score': 90, 'class': 1 },
            { 'name': '李四', 'age': 19, 'score': 72, 'class': 4 },
            { 'name': '王五', 'age': 17, 'score': 80, 'class': 2 },
            { 'name': '赵六', 'age': 22, 'score': 65, 'class': 1 },
            { 'name': '田七', 'age': 19, 'score': 68, 'class': 2 },
            { 'name': '王八', 'age': 18, 'score': 85, 'class': 1 },
            { 'name': '吴九', 'age': 21, 'score': 82, 'class': 4 },
        ]);
        console.log('数据插入成功');
        mongodb.client.close();
    } catch (error) {
        console.log(error.stack);
    }
});

mongodb.connect();