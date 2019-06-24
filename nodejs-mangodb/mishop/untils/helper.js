// 引入模块
const path=require('path'),
      fs=require('fs');

var helper = {
    // 处理日期,时间戳转换成日期的
    dtToDate(dt) {

        let date = new Date(dt);

        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let result = y + '-' + m + '-' + d;

        return result;

    },
    // 处理分类
    getClassName(cid) {

        var className = '';

        if (cid === 5) {
            className = '电视';
        } else if (cid === 3) {
            className = '手机';
        } else {
            className = '其他';
        }
        return className;

    },
    // 把日期转换成时间戳
    dateToDt(d) {

        const dt1 = new Date(d);
        const time = dt1.getTime();
        return time;
    },
    // 文件上传
    uploadFile(f) {

        // 重命名
        var dt = new Date();
        var arr = f.name.split('.');
        var length = arr.length;
        var newName = dt.getTime() + '.' + arr[length - 1];

        // 上传的远程路径
        var dst = path.join(__dirname, '../public/images/') + newName;
        var dst_ = 'images/' + newName;


        // 创建读流
        var reader = fs.createReadStream(f.path);

        // 创建一个可写的流
        var write = fs.createWriteStream(dst);

        // 管道
        reader.pipe(write);

        return dst_;

    }

}

module.exports = helper;