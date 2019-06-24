// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')();

router.get('/',async (ctx)=>{

    // 模板
    await ctx.render('login');

})

router.post('/logindo',async(ctx)=>{

    // 接收表单数据
    let res=ctx.request.body;
    // console.log(res);
    let exg=/^[a-z0-9]{6,12}$/;

    if(!exg.test(res.username)|| !exg.test(res.pwd)){
        ctx.body='用户名或者密码填写不规范';
    }else{

        // 设置session
        ctx.session.code=res.username;

        ctx.redirect('http://localhost:2000/admin');

    }

})


// 暴露路由
module.exports=router.routes();