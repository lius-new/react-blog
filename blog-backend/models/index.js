const config = require('../config')
const mongoose = require('mongoose');

class DatabaseSource {
    constructor(config) {
        this.validateParams(config);
        this.url = config.url;
        this.database = config.database;
    }

    connect() {
        mongoose.connect(this.url + this.database);
        let db = mongoose.connection;

        db.on('error', (err) => {
            throw new Error(err);
        })

        db.once('open', () => {
            console.log('数据库连接成功');
        })

        db.once('close', () => {
            console.log('关闭连接');
        })
    }

    validateParams(config) {
        if (!(config.url && config.database)) throw new Error('数据库参数异常');
    }
}


module.exports = new DatabaseSource(config);