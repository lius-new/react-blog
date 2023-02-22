// 管理员->自己
const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema({
    username: String,
    password: String,
})

const Admin = mongoose.model('admin', adminSchema);

class AdminService {
    static async getUser(username) {
        return await Admin.find({ username });
    }
    static async deleteUser(id) {
        return await Admin.deleteOne({ _id: mongoose.Types.ObjectId(id) });
    }
    static async saveUser(user) {
        if (!(user.username && user.password)) return false;
        await Admin.create({ username: user.username, password: user.password });
        return true;
    }
}

module.exports = AdminService;