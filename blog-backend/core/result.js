const AdminEnum = {
    LOGIN_SUCCESS: { code: 1000, msg: '登录成功' },
    LOGIN_ERROR: { code: 1001, msg: '登录失败' },
    REGISTER_SUCCESS: { code: 1002, msg: '注册成功' },
    REGISTER_ERROR: { code: 1003, msg: '注册失败,用户名已经存在' },
    LOGOUT_SUCCESS: { code: 1004, msg: '注销登录' },
    DELETE_SUCCESS: { code: 1013, msg: '删除成功' },
    DELETE_ERROR: { code: 1014, msg: '删除失败' },
}

const BlogEnum = {
    BLOG_GET_SUCCESS: { code: 1005, msg: '获取博客成功' },
    BLOG_GET_ERROR: { code: 1006, msg: '获取博客失败' },
    BLOG_SAVE_SUCCESS: { code: 1007, msg: '保存博客成功' },
    BLOG_SAVE_ERROR: { code: 1008, msg: '保存博客失败' },
    BLOG_UPDATE_SUCCESS: { code: 1009, msg: '更新博客成功' },
    BLOG_UPDATE_ERROR: { code: 1010, msg: '更新博客失败' },
    BLOG_DELETE_SUCCESS: { code: 1011, msg: '删除博客成功' },
    BLOG_DELETE_ERROR: { code: 1012, msg: '删除博客失败' },
}

const EnumCode = Object.freeze({
    ...AdminEnum, ...BlogEnum
})

class Result {

    static ResultCodeMsg(opt) {
        return { code: opt.code, msg: opt.msg }
    }
    static ResultCodeMsgData(opt, data) {
        return { code: opt.code, msg: opt.msg, data: data }
    }

}

module.exports = {
    EnumCode, Result
}