const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

//创建模型（Model bm_user->bm_users 这一个张表)
const User = seq.define(
  "bm_user",
  {
    // id 会被sequelize自动创建，管理
    user_name: {
      type: DataTypes.STRING, //字段的数据类型
      allowNull: false, //该字段自否能为空
      unique: true, //该字段是否唯一
      comment: "用户名,唯一",
    },
    password: {
      type: DataTypes.STRING(64), //字段的数据类型
      allowNull: false, //该字段自否能为空
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN, //字段的数据类型
      allowNull: false, //该字段自否能为空
      defaultValue: 0, //字段的默认值
      comment: "是否为管理员 0=>不是管理员,默认值 , 1=>是管理员",
    },
  },
  {
    timestamps: false, //模型创建表的时候,不要创建updateAt和createAt的时间
  }
);
// 强制同步数据库
// User.sync({ force: true }); //执行模型,创建数据库表

// `sequelize.define` 会返回模型
// console.log(User === seq.models.User); // true

module.exports = User;
