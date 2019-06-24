const DB = require('./db');

var datalist = {

    // 获取所有数据
    getAll: DB.findSort('product', {},-1),

    // 执行新增
    insert:(cname, data)=> {

        // let res = await DB.insert(cname, data);
        // console.log(res.result.n);

        // if (res.result.n>0) {
        //     return 'ok';
        // } else {
        //     return 'fail';
        // }
        // console.log(111);
        var res='12';

        DB.insert(cname,data).then((data)=>{

            console.log(this);
            
            if (data.result.n>0) {
                res='ok';
            } else {
                res='fail';
            }

        })
        // return res;
        console.log(res);

    },
    // 浏览
    show(cname,data){

       return DB.find(cname,data);

    }
}

module.exports = datalist;