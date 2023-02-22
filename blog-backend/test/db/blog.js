const database = require('../../models');
const BlogService = require('../../models/BlogModel');

async function getBlog() {
    database.connect();
    const res = await BlogService.getBlog('63f5c297d07e5042fece83be');
    console.log(res);
}
async function deleteBlog() {
    database.connect();
    const res = await BlogService.deleteBlog('63f5c297d07e5042fece83be');
    console.log(res);
}
async function updateBlog() {
    database.connect();
    const res = await BlogService.updateBlog({
        id: '63f5c297d07e5042fece83be',
        title: '修改后的标题',
        content: '修改文章'
    });
    console.log(res);
}

async function saveBlog() {
    database.connect();
    const res = await BlogService.saveBlog(
        {
            title: 'MongoDB 存储博客文章示例',
            content: '这是一篇使用 MongoDB 存储博客文章的示例。',
            tags: ['MongoDB', '博客文章'],
            author: '张三'
        }
    );
    console.log(res);
}
