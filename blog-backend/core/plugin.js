const bodyParser = require('koa-bodyparser');

function initPlugins(app) {
    app.use(bodyParser());
}

module.exports = initPlugins;
