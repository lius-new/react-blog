## Events 模块
Events模块是Node最重要的模块，它提供一个属性是EventEmitter,EventEmitter的核心是事件发射器与事件监听器.

Node中大部分的模块，都继承自 Events 模块。

- Events 模块是Node对 发布订阅模式（publish/subscribe）的实现。一个对象通过这个模块，向另一个对象传递消息。

- 该模块通过 EventEmitter 属性，提供了一个构造函数。该构造函数的实例具有 on 方法，可以用来监听指定事件，并触发回调函数。

- 任意对象都可以发布指定事件，被 EventEmitter 实例的on方法监听到。