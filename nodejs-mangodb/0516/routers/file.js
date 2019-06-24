
// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')(),
      fs=require('fs');


router.get('/',async (ctx)=>{

    // ctx.body='nodejs';

    // 检测是文件还是目录
    fs.stat('public',(err,stats)=>{
        if(err){
            // console.log(err);
        }else{

            if(stats.isFile()){
                // console.log('他是文件');
            }else if(stats.isDirectory()){
                // console.log('他是目录');
            }else{
                // console.log('未知');
            }

        }
    })

    // 判断文件是否存在
    fs.exists('public/css/base2.css',(exits)=>{

        // console.log(exits);

    })

    // 创建目录
    let dirName="view/test";

    fs.exists(dirName,(exits)=>{

        if(!exits){
            fs.mkdir(dirName,(err)=>{

                if(!err){
                    console.log('目录创建成功');
                }else{
                    console.log('失败');
                }

            });
        }

    })

    let dirName1="view/test1";

    // 删除目录
    fs.rmdir(dirName1,(err)=>{
        if(err){
            console.log('删除失败');
        }else{
            console.log('删除目录成功');
        }
    })

    // 创建写入目录
    fs.writeFile('public/test.txt','啊啊啊啊啊啊啊啊啊啊啊',err=>{

        if (err){
		    console.log(err);
	    } else {
		    console.log('写入成功');
	    }

    })

    // 管道流
    // 创建一个可读文件流
    var readStream=fs.createReadStream('public/images/1557912240130.jpg');
    var writeStream=fs.createWriteStream('view/xx.jpg');

    readStream.pipe(writeStream);
})


// 暴露路由
module.exports=router.routes();