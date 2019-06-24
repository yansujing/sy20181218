
// 数据库的操作类
const MongoClient=require('mongodb');
const config=require('./config.js'),
      ObjectId=require('mongodb').ObjectId;

// 类
class Db{

    // 构造函数
    constructor(){

        this.dbClient='';

        // 连接数据库
        this.connect();

    }


    // 数据连接
    connect(){

        return new Promise((resolve,rejact)=>{

            // 数据库的地址
            const url=config.url;

            // 数据库名称
            const dbName=config.dbName;


            if(!this.dbClient){

           
                // 数据库连接
                MongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{

                    if(err){

                        rejact('数据库连接失败');
                        
                    }else{

                    
                        // console.log('数据库连接成功111');
                        // 创建数据库操作对象  
                        this.dbClient=client.db(dbName);

                        resolve(this.dbClient);
                    }
                })
            }else{

                resolve(this.dbClient);

            }
        })
   

    }

    // 转换id
    getObjectId(id){
        
        return new ObjectId(id);

    }



    // 新增
    insert(cName,json,tag=1){

        return new Promise((resolve,rejact)=>{

            this.connect().then(db=>{

                if(tag===1){

                    db.collection(cName).insertOne(json,(err,doc)=>{

                        if(err){
                            rejact(err);
                        }else{
                            resolve(doc);
                        }

                    })

                }else{

                    db.collection(cName).insertMany(json,(err,doc)=>{

                        if(err){
                            rejact(err);
                        }else{
                            resolve(doc);
                        }

                    })

                }
                

            })

        })

    }

    // 修改
    update(cName,json1,json2,tag='one'){

        return new Promise((resolve,rejact)=>{

            this.connect().then(db=>{

                if(tag==='one'){

                    db.collection(cName).updateOne(json1,{$set:json2},(err,doc)=>{

                        if(err){
                            rejact(err);
                        }else{
                            resolve(doc);
                        }

                    })

                }else{

                    db.collection(cName).updateMany(json1,{$set:json2},(err,doc)=>{

                        if(err){
                            rejact(err);
                        }else{
                            resolve(doc);
                        }

                    })

                }
            })

        })

    }


    // 删除
    delete(cName,json){

        return new Promise((resolve,rejact)=>{

            this.connect().then(db=>{

                db.collection(cName).removeOne(json,(err,doc)=>{

                     if(err){
                        rejact(err);
                    }else{
                        resolve(doc);
                    }

                })

            })


        })

    }

    // 查询
    find(cName,json){

         return new Promise((resolve,rejact)=>{

             this.connect().then(db=>{

              db.collection(cName).find(json).toArray((err,doc)=>{

                if(err){
                    rejact(err);
                }else{
                    resolve(doc);
                }

              })
             })
         
         })

    }

    // 排序
    findSort(cName,json,tag=1){

         return new Promise((resolve,rejact)=>{

             this.connect().then(db=>{

              db.collection(cName).find(json).sort({dt:tag}).toArray((err,doc)=>{

                if(err){
                    rejact(err);
                }else{
                    resolve(doc);
                }

              })
             })
         
         })

    }

    // 限制数量
    findLimit(cName,json,count,page=1,sort=-1){

        const start=(page-1)*count;

         return new Promise((resolve,rejact)=>{

             this.connect().then(db=>{

              db.collection(cName).find(json).sort({dt:sort}).skip(start).limit(count).toArray((err,doc)=>{

                if(err){
                    rejact(err);
                }else{
                    resolve(doc);
                }

              })
             })
         
         })

    }
    timeOut(){

        return new Promise((reslove,rejact)=>{

            setTimeout(()=>{

                reslove('xxx');

            },2000)

        })

    }

}


module.exports=new Db();