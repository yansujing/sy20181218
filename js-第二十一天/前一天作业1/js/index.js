

// 加载图片

// 通过 Image 对象加载图片

// Image:是一个构造函数，用来创建 Image对象

// const img = new Image();

// console.log(img);

// img.onload = function () {
//     console.log('加载成功');
// }

// img.onerror = function () {
//     console.log('加载失败');
// }

// img.src = './images/banner1111.jpg';


function loadImgPromise(url) {
    return new Promise((resolve, reject) => {

        const img = new Image();

        img.onload = function () {
            resolve('加载成功')
        }

        img.onerror = function () {
            reject('加载失败')
        }

        img.src = url;
    });
}

loadImgPromise('./images/banner1111.jpg').then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data);
});


