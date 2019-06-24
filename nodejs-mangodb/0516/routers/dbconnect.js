// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')(),
      MongoClient=require('mongodb');


router.get('/',async(ctx)=>{

    ctx.body='数据库';
    // koa框架连接数据库

    // 数据库的地址
    const url='mongodb://admin:admin@localhost:27017/db1?authSource=admin';

    // 数据库名称
    const dbName='db1';

    // 数据库连接
    MongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{

        if(err){
            console.log('数据库连接失败');
            return false;
        }else{

            console.log('数据库连接成功');

        }


    })


})



// 暴露路由
module.exports=router.routes();