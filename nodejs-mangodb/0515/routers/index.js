



// 引入路由模块
// 加上() 实例化了
const router=require('koa-router')();

const news=require('./news.js');

const path=require('path');
const fs=require('fs');


// 路由 /根目录，代表localhost:2000
router.get('/',async (ctx)=>{

    // 给模板提供数据
    var title='首页22';

    let my={'name':'ysj','age':20}

    await ctx.render('home',{tt:title,isshow:false,my});

})



// 新闻路由
router.use('news',news);

// get传参以及接收参数
router.get('about',async (ctx)=>{

    // 获取路由地址
    // ctx.body 只能输出最近的那一次,不可输入对象
    ctx.body=ctx.url+ctx.querystring;

    // 获取路由参数
    // console.log 都是在命令行输出的
    console.log(ctx.query);
    // console.log(ctx.querystring);

})

// 动态路由
router.get('home/:id/:name',async (ctx)=>{

     ctx.body='home';
    // 获取参数
    console.log(ctx.params);

})


// 注册
router.get('register',async (ctx)=>{

    await ctx.render('register');

})

// 处理注册(接收post传过来的数据)
router.post('registerdo',async (ctx)=>{

    // 接收表单数据
    var formDate=ctx.request.body;

    // 接收文件数据
    var fileData=ctx.request.files.photo;

    // 重命名
    var dt = new Date();
    var newName = dt.getTime()+'.'+fileData.name.split('.')[1];

    // 上传的远程路径
    var dst = path.join(__dirname, '../public/images/') + newName;

    // 创建读流
    var reader = fs.createReadStream(fileData.path);

    // 创建一个可写的流
    var write=fs.createWriteStream(dst);

    // 管道
    reader.pipe(write);
})

// 其他不存在的路由都走这
router.get('*',async (ctx)=>{

    // ctx.body 输出的是文本
    ctx.body='404页面不存在';

})

// 暴露路由
module.exports=router.routes();