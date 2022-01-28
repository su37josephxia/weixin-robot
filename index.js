const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
app.use(require("koa-static")(__dirname + "/"));
app.use(bodyParser());
const { send } = require("./src/wechat");

app.use(async (ctx, next) => {
  const { url } = ctx;
  console.log("url:" + url);
  next();
});
app.use(async (ctx) => {
  console.log("body", ctx.request.body);
  const body = ctx.request.body;
  const payload = { id: body[0], msg: body[1] };
  send(payload);
  ctx.body = { ok: 1 };
});

app.listen(3000, () => {
  console.log(`
微信引擎启动成功
请打开: http:\\\\localhost:3000
`);
});
