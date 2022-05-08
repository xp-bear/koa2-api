const { Sequelize } = require("sequelize");

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require("../config/config.default");
console.log(MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB);
// 方法 3: 分别传递参数 (其它数据库)
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功!");
  })
  .catch((error) => {
    console.log("数据库连接失败!", error);
  });

module.exports = seq;
