function EventEmitter() {
    this._event = {};
}

EventEmitter.prototype.on = function (eventName, callback) {
    if (!this._event) {
        this._event = {};
    }
    if (this._event[eventName]) {
        this._event[eventName].push(callback);
    } else {
        this._event[eventName] = [callback];
    }
}

EventEmitter.prototype.emit = function (eventName, ...args) {
    this._event[eventName].forEach(cb => {
        cb(...args);
    });
}
EventEmitter.prototype.off = function (eventName, callback) {
    if (this._event && this._event[eventName]) {
        this._event[eventName] = this._event[eventName].filter(cb => {
            return cb !== callback && cb.c !== callback;
        })
    }
}

EventEmitter.prototype.once = function (eventName, callback) {
    const one = () => {
        callback();
        this.off(eventName, one);
    }
    one.c = callback;
    this.on(eventName, one);
}