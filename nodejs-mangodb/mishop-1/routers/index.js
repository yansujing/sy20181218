

// 引入路由模块
const router=require('koa-router')(),
      admin=require('./admin/index.js'),
      DB=require('./db.js');

router.get('/',async(ctx)=>{

    ctx.body='欢迎进入mishop首页';

})

// 注册
router.post('register',async(ctx)=>{

    console.log(ctx.request.body);
    let uname=ctx.request.body.uname;
    let pwd=ctx.request.body.pwd;

    let res=await DB.insert('user',{uname,pwd});

    if(res.result.n>0){

        return true;

    }else{
        return false;
    }

})

// 登录
router.get('login',async(ctx)=>{

    ctx.render('login');

})


router.use('admin',admin);


// 暴露路由
module.exports=router.routes();