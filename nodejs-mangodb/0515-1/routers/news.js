const router=require('koa-router')();

router.get('/',async (ctx)=>{

    ctx.body='新闻首页';
    console.log(ctx.url,ctx.query,ctx.querystring);
})

router.get('/news',async (ctx)=>{

    ctx.body='新闻';
    console.log(ctx.url,ctx.query,ctx.querystring);
})

router.get('/news/guojia',async (ctx)=>{

    ctx.body='新闻国家';
    console.log(ctx.url,ctx.query,ctx.querystring);
})

module.exports=router.routes();