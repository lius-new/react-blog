// 博客
const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Blog = mongoose.model('blog', blogSchema);

class BlogService {

    // return -> blog
    static async getBlog(id) {
        return await Blog.findById(id);
    }

    // return -> { acknowledged: true, deletedCount: 1 }
    static async deleteBlog(id) {
        return await Blog.deleteOne({ _id: id });
    }

    // return -> {acknowledged: true,modifiedCount: 1,...}
    static async updateBlog(blog) {
        return await Blog.updateOne({ _id: blog.id }, { title: blog.title, content: blog.content })
    }

    // return save result -> blog
    static async saveBlog(blog) {
        return await Blog.create({ ...blog });
    }
}

module.exports = BlogService;