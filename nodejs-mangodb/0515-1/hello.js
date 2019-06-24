
// 引入koa模块
const koa=require('koa');

const app=new koa();

app.use(async (ctx)=>{

    ctx.body='world';

})

// 开始koa服务器
app.listen(2345,()=>{

    console.log('localhost:2345');

})
