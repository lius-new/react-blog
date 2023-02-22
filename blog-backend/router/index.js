const routers = [
    require('./test'),
    require('./admin'),
    require('./blog'),
]

function initRouter(app) {

    for (let index = 0; index < routers.length; index++) {
        const router = routers[index];
        app.use(router.routes()).use(router.allowedMethods());
    }

}

module.exports = initRouter;