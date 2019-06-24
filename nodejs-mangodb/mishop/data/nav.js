
const config=require('./config.js');

// console.log(config);

const nav={

    navList:`
             <a href="`+config.host+`/admin/product_list">产品管理</a>
             <a href="`+config.host+`/admin/ad_list">广告管理</a>
             <a href="`+config.host+`/admin/admin_list">管理员管理</a>
             <a href="`+config.host+`/admin/exit">退出系统</a>`

}

module.exports=nav;