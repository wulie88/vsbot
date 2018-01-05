const Koa = require('koa')
, path = require('path')
, koaLogger = require('koa-logger')
, koaStatic = require('koa-static')
, convert = require('koa-convert')
, bodyParser = require('koa-bodyparser')
, json = require('koa-json')

let app = new Koa();
app.use(bodyParser());
app.use(json());
app.use(koaLogger());

app.use(async (ctx, next) => {
  ctx.state = Object.assign({}, ctx.state, {
    assetsPath,
    csrf: ctx.csrf,
    isMobile: false,
    env: process.env.NODE_ENV,
    footer: {
      about: ctx.__('dashboard.about'),
      feedback: ctx.__('dashboard.feedback'),
      code: ctx.__('dashboard.code'),
    },
  });
  await next();
});

// 静态文件serve在koa-router的其他规则之上 
app.use(koaStatic(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.listen(8889, () => {
  console.log('Koa is listening in 8889');
});

module.exports = app;
