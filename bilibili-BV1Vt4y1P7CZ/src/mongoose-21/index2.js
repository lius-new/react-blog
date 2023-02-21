const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.236.100:27017/demo');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connect error:'));

db.once('open', () => console.log('连接成功'));
db.once('close', () => console.log('断开连接'));


const userSchema = mongoose.Schema({
    name: String,
    age: Number,
});

// -----method:1,插入数据-----
const User = mongoose.model('User', userSchema);

new User({ name: 'zhangsan', age: 10 }).save(function (err, user) {
    if (err) return console.log(err);
    console.log(user);
})

// -----method:2,插入数据-----
User.create({ name: 'lisi', age: 9 }, (err, res) => {
    if (err) return console.log(err);
    console.log(res);
})

// -----method:3,插入数据-----
User.create([{ name: 'lisi', age: 9 }, { name: 'lisi', age: 9 }], (err, res) => {
    if (err) return console.log(err);
    console.log(res);
})

// ---User.create:promise
User.create([{ name: 'lisi', age: 9 }, { name: 'lisi', age: 9 }])
    .then(res => console.log(res))
    .catch(err => console.log(err));
