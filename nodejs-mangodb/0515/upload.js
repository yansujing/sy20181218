
// 引入模块 fs path都是自制的模块。无需安装
const koa=require('koa'),
      router=require('koa-router')(),
      myrouter=require('./routers/index.js'),render=require('koa-art-template'),
      path=require('path'),
      static=require('koa-static'),
    //   bodyParser=require('koa-bodyparser');
      koaBody=require('koa-body'),
      fs=require('fs');

// 实例化
const app =new koa();

// 配置模板引擎
render(app, {
  root: path.join(__dirname, 'view'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

//配置静态资源(css,js，图片，都需要在这个文件夹中建立使用)
app.use(static(path.join(__dirname,'public')));

//配置bodyParser
// app.use(bodyParser());

///////////////////////////////////////// 配置 koa-body
app.use(koaBody({multipart: true}));



// 路由(总入口)
router.use('/',myrouter);

// 开启路由
app
    .use(router.routes())
    .use(router.allowedMethods());


// 开启服务器
app.listen(2000,()=>{
    console.log('Server running at localhost:2000');
})