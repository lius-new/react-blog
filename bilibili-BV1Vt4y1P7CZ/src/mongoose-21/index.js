const mongoose = require('mongoose');

// 连接
mongoose.connect('mongodb://192.168.236.100:27017/demo')

const db = mongoose.connection;

// 注册error事件和其对应的事件函数
db.on('error', console.error.bind(console, 'connection error [连接失败]:'))

// 注册open事件和open事件对应的函数
db.once('open', function () {
    console.log('连接成功');
})

// 注册close事件和close事件对应的函数
db.once('close', function () {
    console.log('断开连接');
})

// 定义文档中的数据结构
const userSchema = mongoose.Schema({
    name: String,
    age: Number
});

// model对应集合
const User = mongoose.model('User', userSchema);

let user1 = new User({ name: 'zhangsan', age: 10 });
let user2 = new User({ name: 'lisi', age: 8 });

user1.save(function (err, user) {
    if (err) return console.log(err);
    console.log(user);
})