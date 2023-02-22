const database = require('../../models');
const AdminService = require('../../models/AdminModel')

async function test1() {
    database.connect();
    let res = await AdminService.getUser('admin');
    // let res = await AdminService.saveUser({ username: 'admin', password: 'root' });
    console.log(res);
}

test1();