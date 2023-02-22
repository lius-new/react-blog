const Koa = require('koa');
const database = require('./models');
const initRouter = require('./router');
const initPlugins = require('./core/plugin');

; (function () {
    const app = new Koa();

    database.connect();
    initPlugins(app);
    initRouter(app);

    app.listen(3000, () => {
        console.log('server running in port:3000');
    })
})();
