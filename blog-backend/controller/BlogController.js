const BlogService = require('../models/BlogModel');
const { Result, EnumCode } = require('../core/result');

class BlogController {
    static async getBlog(ctx, next) {
        // TODO: 验证
        const id = ctx.request.body.id;
        const blog = await BlogService.getBlog(id);
        ctx.body = Result.ResultCodeMsgData(EnumCode.BLOG_GET_SUCCESS, blog);
    }

    static async saveBlog(ctx, next) {
        // TODO: 验证
        await BlogService.saveBlog({ ...ctx.request.body })
        ctx.body = Result.ResultCodeMsg(EnumCode.BLOG_SAVE_SUCCESS);
    }

    static async deleteBlog(ctx, next) {
        // TODO: 验证
        await BlogService.deleteBlog(ctx.request.body.id)
        ctx.body = Result.ResultCodeMsg(EnumCode.BLOG_DELETE_SUCCESS);
    }
    static async updateBlog(ctx, next) {
        // TODO: 验证
        await BlogService.updateBlog({ ...ctx.request.body })
        ctx.body = Result.ResultCodeMsg(EnumCode.BLOG_UPDATE_SUCCESS);
    }
}
module.exports = BlogController;