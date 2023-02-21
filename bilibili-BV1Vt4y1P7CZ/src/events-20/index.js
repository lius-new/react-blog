const EventEmitter = require('events');

function Cat() { }
Object.setPrototypeOf(Cat.prototype, EventEmitter.prototype);

let cat = new Cat();

const sleep = (a, b) => {
    console.log(a, '睡');
};
const eat = (a, b) => {
    console.log(b, '吃');
};


// 订阅'猫咪'的方法
cat.on('猫咪', sleep)
cat.on('猫咪', eat)
setTimeout(() => {
    // 执行'猫咪的方法',后面的是参数
    cat.emit('猫咪', '小胖仙', '小胡子')
}, 1000);

setTimeout(() => {
    cat.emit('猫咪', '小胖仙', '小胡子')
    cat.off('猫咪', sleep);
    cat.emit('猫咪', '小胖仙', '小胡子')
}, 1000)

const demolition = () => {
    console.log('拆家');
}

cat.once('猫咪', demolition);

setTimeout(() => {
    cat.emit('猫咪', '小胖仙', '小胡子')
}, 1000)