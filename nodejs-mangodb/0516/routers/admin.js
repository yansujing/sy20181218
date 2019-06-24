
const router=require('koa-router')();

// 路由中间件
router.use(async(ctx,next)=>{

    // 如果没有登录（获取不到session的值），则跳转到登录路由
    console.log(ctx.session.code);

    if(!ctx.session.code){
        // 跳转到login路由下
        ctx.redirect('login');
    }else{
         next();
    }
   

})

router.get('/',async(ctx)=>{

    ctx.body='后台管理系统';

})

// 新增
router.get('/add',async(ctx)=>{

    ctx.bady='新增产品的页面';

})


module.exports=router.routes();
