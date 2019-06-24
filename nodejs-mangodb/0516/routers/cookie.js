
// 引入路由模块
const router=require('koa-router')();

router.get('/',async (ctx)=>{



})

router.get('/setcookie',async(ctx)=>{

    //  设置cookie
    // 在控制台的application 中可以看到你设置的cookie
    ctx.cookies.set('username','jack',{
        maxAge:1000*60*60,
        httpOnly:false
    })

})

router.get('/getcookie',async(ctx)=>{

    // 读到cookie
    let cookieValue=ctx.cookies.get('username');
    ctx.body=cookieValue;

})

router.get('/delcookie',async(ctx)=>{

    // 删除cookie
    ctx.cookies.set('username','',{maxAge:0});

})

// 暴露
module.exports=router.routes();