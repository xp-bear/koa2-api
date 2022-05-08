const { getUserInfo } = require("../service/user.service");
const { userAlreadyExited, userFormateError } = require("../constant/err.type");
// 验证用户名或者密码是否为空
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  // 合法性与合理性,处理错误
  if (!user_name || !password) {
    console.error("用户名或者密码为空!", ctx.request.body); //记录错误
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};

// 验证用户名是否已经存在
const verifyUser = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  // 用户名是否存在性,判断!
  if (await getUserInfo({ user_name })) {
    ctx.app.emit("error", userAlreadyExited, ctx);
    return;
  }
  await next();
};

module.exports = {
  userValidator,
  verifyUser,
};
