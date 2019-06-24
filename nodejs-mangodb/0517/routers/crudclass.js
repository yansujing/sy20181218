// 引入路由

const router=require('koa-router')(),
      DB=require('./db.js');

router.get('/',async(ctx)=>{



})

// 新增
// router.get('/add',async(ctx)=>{

//     var res=await DB.insert('collection1',[{'uname':'tome1'},{uname:'rose',age:22,score:66.66}]);

//     console.log(res);
// })

// 修改
router.get('/update',async(ctx)=>{

    var res=await DB.update('collection1',{uname:'rose'},{score:100},2);

    console.log(res);

})

// 删除
router.get('/delete',async(ctx)=>{

    var res=await DB.delete('collection1',{uname:'jack'});

    console.log(res);

    if(res.result.n>0){
        ctx.body='修改成功';
    }else{
        ctx.body='修改失败';
    }

})

router.get('/find',async(ctx)=>{

    let res=await DB.findLimit('collection1',{age:{$gt:0}},3,2);
    
    console.log(res);

})




module.exports=router.routes();