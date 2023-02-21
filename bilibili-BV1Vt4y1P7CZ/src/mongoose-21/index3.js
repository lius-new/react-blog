const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.236.100:27017/demo')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connect error:'))
db.once('open', () => console.log('连接成功'))
db.once('close', () => console.log('关闭连接'))


const userSchema = mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// 显示name=zhangsan
User.find({ name: 'zhangsan' }, (err, res) => {
    if (err) return console.log(err)
    console.log(res);
});

// 显示name=zhangsan, 但数据中不该包含_id
User.find({ name: 'zhangsan' }, { _id: 0, __v: 0 }, (err, res) => {
    if (err) return console.log(err)
    console.log(res);
});


console.log('----------------------');
(async function (pageSize, pageIndex) {
    // 实现分页
    const users = await User.find({}, {}, { skip: (pageIndex - 1) * pageSize, limit: pageSize });
    console.log('//[', users, ']//');
})(2, 2);

// 数据更新
// -------------
User.update({ name: 'zhangsan' }, { $set: { age: 100 } },/*所有的全部修改 {multi:true}*/(err, res) => {
    if (err) return console.log(err);
    console.log(res);
})

// 删除数据
User.deleteOne({ name: 'zhangsan' }, (err, res) => {
    if (err) return console.log(err);
    console.log(res);
})
// 删除数据
User.remove({ name: 'zhangsan' }, (err, res) => {
    if (err) return console.log(err);
    console.log(res);
})