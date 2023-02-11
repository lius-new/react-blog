const routers = {
    homeRouter: require('./routes/cart'),
    cartRouter: require('./routes/home'),
    userRouter: require('./routes/user'),
}


module.exports = {
    ...routers, initRouter(app) {
        for (const k of Object.keys(routers)) {
            app.use(routers[k].routes()).use(routers[k].allowedMethods());
        }
    }

}