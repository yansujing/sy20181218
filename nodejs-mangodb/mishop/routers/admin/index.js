const router = require('koa-router')(),
    session = require('koa-session'),
    nav = require('../../data/nav.js'),
    fs = require('fs'),
    path = require('path'),
    DB = require('../../data/db.js'),
    DBS = require('../../data/datas'),
    helper = require('../../untils/helper');
const { base64decode } = require('nodejs-base64');

// 路由的中间件
router.use(async (ctx, next) => {

    if (!ctx.session.mishopadmin) {

        // 跳转到登录页面
        ctx.redirect('../login');

    } else {

        await next();

    }

})


router.get('/', async (ctx) => {

    await ctx.render('admin', { 'menu': nav.navList });

})

// 产品管理-列表
router.get('/product_list', async (ctx) => {

    // 读取数据
    let currentPage = ctx.query.page ? ctx.query.page : 1;

    // 每页读取的记录数
    let pageCount = 5;

    // 创建页码
    // 1.总记录数
    let totalRecordsRes = await DB.find('product', {});
    let totalRecords = totalRecordsRes.length;

    // 2.获取页码数
    let pages = Math.ceil(totalRecords / pageCount);

    // 3.创建页码html
    let pageHtml = '';
    for (let j = 1; j <= pages; j++) {

        if (j == currentPage) {

            pageHtml += '<a href="product_list?page=' + j + '" style="color:red;">' + j + '</a>';

        } else {

            pageHtml += '<a href="product_list?page=' + j + '">' + j + '</a>';

        }

    }


    let data = await DB.findLimit('product', {}, pageCount, currentPage);//findLimit(文档名称，查询条件，每页显示的记录数，当前页码，排序顺序)；



    let newArr = [];

    for (let i = 0; i < data.length; i++) {

        // 处理分类名称
        let currentItem = data[i];
        switch (currentItem.cid) {

            case 3:
                currentItem.cname = '手机';
                break;
            case 5:
                currentItem.cname = '电视';
                break;
            default:
                currentItem.cname = '其他';

        }

        // 处理日期
        let date = new Date(currentItem.dt);

        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        currentItem.dt = y + '-' + m + '-' + d;


        newArr.push(currentItem);

    }

    ctx.render('product_list', { 'menu': nav.navList, allDatas: newArr, 'pagination': pageHtml });



})

// 产品管理-新增
router.get('/product_add', async (ctx) => {

    await ctx.render('product_add', { 'menu': nav.navList });

})

// 产品管理-执行新增
router.post('/product_add_do', async (ctx) => {

    // 获取表单数据
    let datas = ctx.request.body;
    // console.log(datas);


    // 获取文件数据 
    let fileData = ctx.request.files.photo;

    // 处理文件上传
    // 重命名
    var dt = new Date();
    var arr = fileData.name.split('.');
    var length = arr.length;
    var newName = dt.getTime() + '.' + arr[length - 1];

    // 上传的远程路径
    var dst = path.join(__dirname, '../../public/images/') + newName;
    // console.log(dst);
    var dst_ = 'images/' + newName;


    // 创建读流
    var reader = fs.createReadStream(fileData.path);

    // 创建一个可写的流
    var write = fs.createWriteStream(dst);

    // 管道
    reader.pipe(write);

    const dt1 = new Date(datas.update);
    const time = dt1.getTime();

    let cid_ = parseInt(datas.catagory);

    let price_ = parseFloat(datas.price);

    if (datas.switch) {
        var recommend_ = parseInt(datas.switch);
    } else {
        var recommend_ = 0;
    }

    // 处理插入数据
    let res = await DB.insert('product', { 'cid': cid_, 'title': datas.title, 'price': price_, 'cover': dst_, 'recommend': recommend_, 'desct': datas.desc, 'dt': time })

    // 处理结果
    if (res.result.n > 0) {
        ctx.body = '上架成功';

        // setTimeout(function (){

        // console.log(2324);
        ctx.redirect('product_list');

        // },2000)

    } else {
        ctx.body = '上架失败';
    }

})


// 产品浏览
router.get('/product_view', async (ctx) => {

    // 接收id
    let id = ctx.query.id;

    // 根据id获取该条记录
    let res = await DB.find('product', { _id: DB.getObjectId(id) });
    // console.log(res);

    let data = res[0];

    // console.log(data);
    let className = '';
    switch (data.cid) {

        case 3:
            className = '手机';
            break;
        case 5:
            className = '电视';
        default:
            className = '其他';

    }

    // 处理日期
    let date = new Date(data.dt);

    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    data.dt = y + '-' + m + '-' + d;
    data.className = className;

    if (data.recommend === 1) {
        data.recommend = '推荐';
    } else {
        data.recommend = '不推荐';
    }

    console.log(data);


    // 处理数据
    // 1.分类名称

    // 渲染到模板
    ctx.render('product_view', { 'menu': nav.navList, 'datas': data });

    // res.then(function (data) {

    //     console.log(data);
    //     ctx.body = data;

    // })

})

// 产品管理-删除
router.get('/product_delete', async (ctx) => {

    // 接收id
    let id = ctx.query.id;

    // 执行删除
    let res = await DB.delete('product', { '_id': DB.getObjectId(id) });

    // 处理结果
    if (res.result.n > 0) {

        var deleteRes = '删除成功！';

    } else {
        var deleteRes = '删除失败';
    }

    ctx.render('product_delete', { 'menu': nav.navList, deleteRes });

})

// 删除所选
router.get("/product_delete_selected", async function (ctx) {

    // 初始化
    var status = true;

    let ids = ctx.query.ids;

    // 解码base64
    let debase64 = base64decode(ids);

    // console.log(debase64);
    let tempArr = JSON.parse(debase64);
    console.log(tempArr);

    // 循环删除所选
    for (let i = 0; i < tempArr.length; i++) {

        let res = await DB.delete('product', { '_id': DB.getObjectId(tempArr[i]) });

        if (res.result.n != 1) {
            status = false;
        }
    }
    if (!status) {
        ctx.body = '删除失败';
    } else {
        ctx.body = '删除成功';
    }

})


// 产品管理-修改
router.get('/product_update', async (ctx) => {

    let id = ctx.query.id;

    // 根据id获取该记录
    let data = await DB.find('product', { _id: DB.getObjectId(id) });

    // 处理数据
    if (data[0].recommend === 1) {

        data[0].check = 'checked';

    } else {

        data[0].check = '';

    }

    // 处理分类
    data[0].cid = helper.getClassName(data[0].cid);

    // 处理日期
    data[0].date = helper.dtToDate(data[0].dt);

    // 渲染模板
    ctx.render('product_update', { 'menu': nav.navList, 'data': data[0] });

})

// 产品管理-执行修改
router.post('/product_update_do', async (ctx) => {

    let formData = ctx.request.body;

    console.log(formData);

    // 接收文件
    let files = ctx.request.files.photo;
    // console.log(files);


    // 处理数据
    let newData = {};
    if (files.name) {

        newData.cover = helper.uploadFile(files);

    }
    newData.cid = parseInt(formData.catagory);
    newData.title = formData.title;
    newData.price = parseInt(formData.price);
    newData.recommend = parseInt(formData.switch);
    newData.desct = formData.desc;
    newData.dt = helper.dateToDt(formData.update);
    console.log(newData);

    // 执行修改
    let res = await DB.update('product', { '_id': DB.getObjectId(formData.id) }, newData);

    // 处理结果
    if (res.result.n > 0) {

        ctx.body = '修改成功!页面跳转中。。。';

        await DB.timeOut();

        ctx.redirect('product_list');


    } else {

        ctx.body = '修改失败';

    }

})



// 暴露路由
module.exports = router.routes();