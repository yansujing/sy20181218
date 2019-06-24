

// 引入路由模块
const router=require('koa-router')(),
      admin=require('./admin/index.js'),
      DB=require('../data/db.js'),
      sha1=require('sha1'),
      helper=require('../untils/helper');

router.get('/',async(ctx)=>{

    ctx.body='欢迎进入mishop首页';

})

// 注册
router.post('register',async(ctx)=>{

    const uname=ctx.request.body.uname;
    let pwd=ctx.request.body.pwd;

    pwd=sha1(pwd);

    const res=await DB.insert('user',{uname,pwd});

    if(res.result.n>0){

        ctx.body='ok';

    }else{
        ctx.body='error095';
    }

})

// 登录
router.get('login',async(ctx)=>{

    ctx.render('login');

})

// 检测登录
router.post('checklogin',async(ctx)=>{

    // 接收post数据
    const uname=ctx.request.body.uname;
    let pwd=sha1(ctx.request.body.pwd);
    // ctx.body=uname+pwd;
    
    let result=await DB.find('user',{uname,pwd});
    // console.log(result);

    if(result.length<1){
        ctx.body='error094';
    }else{

            ctx.session.mishopadmin=uname;
            ctx.body='pass';
    
    }

})

// api
router.get('api',async(ctx)=>{

    // ctx.body="分类";
    // let res=await DB.find("product",{});
    // console.log(res);

    // let dataArr=[];

    // for(let i=0;i<res.length;i++){

    //     let obj={};
    //     obj.id=res[i]._id;
    //     obj.title=helper.getClassName(res[i].cid);

    //     dataArr.push(obj);
    // }
    // ctx.body=dataArr;
    let tempArr=[];
    tempArr[0]={"id":3,"name":"手机"};
    tempArr[1]={"id":5,"name":"电视"};
    // tempArr[2]={"id":5,"name":"电视"};

    let list={"list":tempArr};

    ctx.body=list;
    
    

})

// api-content
router.get('api/content',async(ctx)=>{

    ctx.body='内容';
    let listArr1=[];
    let listArr2=[];
    let res=await DB.find('product',{});
    ctx.body=res;
    for(let i=0;i<res.length;i++){

        if(res[i].cid===3){

            listArr1.push(res[i]);

        }else if(res[i].cid===5){

            listArr2.push(res[i]);

        }

    }
    

})

router.use('admin',admin);


// 暴露路由
module.exports=router.routes();