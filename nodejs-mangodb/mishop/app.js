

// 引入模块 fs path都是自制的模块。无需安装
const koa=require('koa'),
      router=require('koa-router')(),
      myrouter=require('./routers/index.js'),render=require('koa-art-template'),
      path=require('path'),
      static=require('koa-static'),
    //   bodyParser=require('koa-bodyparser');
      koaBody=require('koa-body'),
      fs=require('fs'),
      session=require('koa-session'),
      cors=require('@koa/cors');


// 实例化
const app =new koa();

// 配置CORS
app.use(cors());

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

// 配置 koa-body
app.use(koaBody({multipart: true}));


//////////////////////////////////////////// 配置session
app.keys = ['some secret hurr'];
 
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
 
app.use(session(CONFIG, app));

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