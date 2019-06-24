
const router=require('koa-router')();
const news=require('./news.js');

router.get('/',async (ctx)=>{

    await ctx.render('art-template',{name:'严素静'});

})

router.use('news',news);

router.get('about/:id/:name',async (ctx)=>{

    ctx.body='关于我们';
    console.log(ctx.params);

})

router.get('*',async(ctx)=>{

    ctx.body='404找不到该页面';

})

// 暴露路由
module.exports=router.routes();