// 这里是http服务
const app = require("./app");
const { APP_PORT } = require("./config/config.default");

app.listen(APP_PORT, () => {
  console.log(`服务启动成功 --> http://localhost:${APP_PORT}`);
});
