//测试在静态方法中能否可以访问到非静态的成员属性
const EventEmitter = require('events');

// 返回的是类本身
class Test {
    constructor() {
        this.name = '张三';
        this.event = new EventEmitter();
    }
    once(eventName, cb) {
        this.event.once(eventName, cb);
    }
    init() {
        this.event.emit('connect');
    }
}

const test = new Test();

console.log('--once callback-- ');

test.once('connect', async () => {
    console.log('--connect--');
})
test.init();