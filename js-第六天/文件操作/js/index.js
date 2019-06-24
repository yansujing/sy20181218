


// 文件操作

// File和FileReader对象
// File:文件对象
// FlieReader:读取文件对象


// 异步任务：当这个任务不知道何时执行完时，这个任务就是 异步任务
// 在js中，异步任务不会阻塞代码

// 通过 回调函数的机制 来实现异步任务

// 文件读取的过程就是一个典型的 异步任务

var fileEle = document.getElementById('file');

var imgPreview = document.getElementById('preview');

fileEle.onchange = function () {

    console.log(this.files);

    // 创建文件读取对象
    var fileReader = new FileReader();

    fileReader.onloadstart = function () {
        console.log('开始读取文件');
    }

    fileReader.onprogress = function () {
        console.log('正在读取文件。。。');
    }

    fileReader.onabort = function () {
        console.log('读取中断');
    }

    fileReader.onerror = function () {
        console.log('读取错误');
    }

    fileReader.onload = function () {
        console.log('读取完成');

        console.log(fileReader);

        console.log(fileReader.result);

        imgPreview.src = fileReader.result;
    }

    // 以dataurl的方式来读取文件，返回值是 包含当前文件的base64信息

    // base64：是一种二进制文件的编码方式
    // 采用base64编码不仅比较简短，而且具有不可读性
    fileReader.readAsDataURL(this.files[0]);

}
