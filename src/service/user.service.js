const User = require("../model/user.model");

class UserService {
  async createUser(user_name, password) {
    // todo 写入数据库
    // 插入数据
    let res = await User.create({ user_name, password });
    // console.log(res);
    return res.dataValues;
  }
}
module.exports = new UserService();
