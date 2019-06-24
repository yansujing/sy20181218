

// 引入模块
const koa=require('koa');

// 实例化对象
const app=new koa();

// 输出hello world
app.use(async (ctx)=>{

    ctx.body='hello world';

});

// 开启服务器
app.listen(8088,function(){

    // 在node命令行打出
    console.log('Server running at localhost:8088');

});

