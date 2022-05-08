const { createUser, getUserInfo } = require("../service/user.service");

class UserController {
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, password } = ctx.request.body;

    try {
      // 2.操作数据库(抽离到service)
      const res = await createUser(user_name, password);
      console.log(res);
      // 3.返回结果
      ctx.body = {
        code: 0,
        message: "用户注册成功!",
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
  async login(ctx, next) {
    ctx.body = "用户登录接口";
  }
}
module.exports = new UserController();
