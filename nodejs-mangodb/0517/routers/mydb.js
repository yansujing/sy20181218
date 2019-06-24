// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')();

router.get('/',async(ctx)=>{

    // 链接数据库
    // 数据库的地址
    const url='mongodb://admin:admin@localhost:27017/db2?authSource=admin';

    // 数据库名称
    const dbName='db2';

    // 数据库连接
    MongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{

        

    })

})

// 暴露路由
module.exports=router.routes();