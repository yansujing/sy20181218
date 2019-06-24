
const koa=require('koa'),
      router=require('koa-router')(),
      myrouter=require('./routers/index.js');

const app=new koa();

// 在服务器上直接输出我是对的。只能输出文本
// app.use(async (ctx)=>{

//     ctx.body='我是对的';

// })

// 路由入口
router.use('/',myrouter);


// 开启路由
app
    .use(router.routes())
    .use(router.allowedMethods());

// 开启服务器
app.listen(8081,()=>{

    console.log('localhost:8081');

})

