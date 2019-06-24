

// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')();

router.get('/',async (ctx)=>{

    let photo='images/pms_1553514717.65661297!200x200.jpg';
    await ctx.render('news',{imgUrl:photo});

})


// 新闻路由暴露
router.get('/news',async (ctx)=>{

    // ctx.body 输出的是文本
    ctx.body='新闻';

})

// 二级路由
router.get('/news/guonei',async (ctx)=>{

    // ctx.body 输出的是文本
    ctx.body='国内新闻';

})

module.exports=router.routes();