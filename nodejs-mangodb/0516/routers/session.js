// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')();


router.get('/',ctx=>{

    


})

router.get('/setsession',async(ctx)=>{

    ctx.session.username='ysj';

})


router.get('/getsession',async(ctx)=>{

    ctx.body=ctx.session.username;

})



module.exports=router.routes();