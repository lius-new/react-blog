const config = require('../config');
const jwtAuth = require('koa-jwt');
const BlogRouter = require('@koa/router');
const BlogController = require('../controller/BlogController');

const blogController = new BlogRouter({ prefix: '/blogs' });

blogController.get('/', BlogController.getBlog)
blogController.post('/', jwtAuth({ secret: config.secretKey }), BlogController.saveBlog)
blogController.delete('/', jwtAuth({ secret: config.secretKey }), BlogController.deleteBlog)
blogController.put('/', jwtAuth({ secret: config.secretKey }), BlogController.updateBlog)

module.exports = blogController;