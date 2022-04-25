// 项目入口文件,编写最基础的代码(应用程序)
const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "hello word";
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
  // 加油
});
