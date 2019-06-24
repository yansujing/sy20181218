
// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')(),
      MongoClient=require('mongodb');

router.get('/',async(ctx)=>{

    // 链接数据库
    // 数据库的地址
    const url='mongodb://admin:admin@localhost:27017/db2?authSource=admin';

    // 数据库名称
    const dbName='db2';

    // 数据库连接
    MongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{

        if(err){

            console.log('数据库连接失败');
            console.log(err);
            return false;
            
        }else{

            console.log('数据库连接成功');
            // 创建数据库操作对象  
            const db=client.db(dbName);

            // 选择文档（表）
            const collection=db.collection('collection1');

            // 新增
            // 一次插入一条记录 collection.insertOne/insertMany(插入的数据[可用数组，插多条]，回调函数）
            // collection.insertOne({uname:'jack',age:33,score:46.25},(err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })

            // 一次插入多条
            //  collection.insertMany([{uname:'jack',age:33,score:46.25},{uname:'jack',age:33,score:46.25},{uname:'jack',age:33,score:46.25}],(err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })

            // 修改 collection.updateOne(条件，修改数据，回调函数）
            //一次修改一条
            // collection.updateOne({age:0},{$set:{uname:'yt',score:55.55}},(err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })

            // 一次修改多条记录
            // collection.updateMany({age:0},{$set:{uname:'yt',score:55.55}},(err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })

            // 删除  collection.removeOne(条件,回调函数)
            // collection.removeOne({age:0},(err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // });


            // 查询
            // 查询全部记录     collection.find({}).toArray(回调函数)
            // collection.find({}).toArray((err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })

            // 查询条件记录
            // collection.find({age:{$gt:25}},{uname:/t/}).toArray((err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })


            // collection.find({$or:[{age:{$gt:25}},{uname:'/t/'}]}).toArray((err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })

            // 倒序
            // collection.find().sort({age:-1}).toArray((err,result)=>{

            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(result);
            //     }

            // })


            // 限制读取的条数
            collection.find().sort({age:-1}).skip(2).limit(2).toArray((err,result)=>{

                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                }

            })
        }


    })

})



// 暴露路由
module.exports=router.routes();