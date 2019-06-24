
// 引入模块
const koa=require('koa'),
      router=require('koa-router')(),
      myrouter=require('./routers/index.js');

// 实例化
const app =new koa();
// const router=router();

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