

// 图片懒加载：延迟或者推迟加载

// 作用：节省带宽，提高网站访问速度


var imgList = document.getElementsByClassName('lazyImg');
console.log(imgList);

var winHeight = window.innerHeight;
console.log(winHeight);

// 已经加载的图片数量
var counts = 0;

var time = null;


// 加载图片
function loadImg() {
    console.log(1);

    for (var i = counts; i < imgList.length; i++) {

        if (imgList[i].offsetTop < winHeight + document.documentElement.scrollTop) {
            console.log(imgList[i].offsetTop);
            imgList[i].src = imgList[i].getAttribute('data-src');

            counts++;
        }
    }

}

// 监听窗口的滚动事件
window.onscroll = function () {

    if (time) {
        clearTimeout(time);
    }

    time = setTimeout(function () {
        loadImg();
    }, 800)

}


loadImg();
