const dbConfig = require('./dbConfig');
const MongoClient = require('mongodb').MongoClient;
const EventEmitter = require('events');

class Mongo {
    constructor(dbConfig) {
        this.dbConfig = dbConfig;
        this.emitter = new EventEmitter();
        // 创建客户端
        this.client = new MongoClient(this.dbConfig.url);
    }

    // 建立连接
    async connect() {
        await this.client.connect();
        this.emitter.emit('connect');
    }
    /**
     * once和on相似,但是其注册的事件只会被调用一次,之后就会被移除
     */
    once(eventName, callback) {
        //   只会连接一次
        this.emitter.once(eventName, callback)
    }
    // 返回collection
    collection(colName, dbName = this.dbConfig.dbName) {
        return this.client.db(dbName).collection(colName);
    }
}

module.exports = new Mongo(dbConfig);