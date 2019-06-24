const router=require('koa-router')(),
      session=require('koa-session');

// 路由的中间件
router.use((ctx,next)=>{

    if(!ctx.session.mishopadmin){

        // 跳转到登录页面
        ctx.redirect('../login');
    }else{

        next();

    }

})
    

router.get('/',async(ctx)=>{



    ctx.body='后台管理首页面';

})

// 产品管理-列表

// 产品管理-新增

// 产品管理-执行新增

// 产品管理-删除

// 产品管理-修改

// 产品管理-执行修改



// 暴露路由
module.exports=router.routes();