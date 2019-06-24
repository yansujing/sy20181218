

var ul = document.getElementsByClassName('container-news')[0];

var length = document.getElementsByClassName('container-news-item').length;

var index = 0;

// 克隆列表第一个元素
var firstLi = document.getElementsByClassName('first')[0].cloneNode(true);

console.log(firstLi);

// 在容器尾部添加克隆的元素
ul.appendChild(firstLi);

setInterval(function () {

    index++;

    console.log(index);

    if (index === length) {
        //等最后一次过渡执行完成再执行相应代码，将ul元素的top属性设为0，即会显示第一个li
        setTimeout(function () {
            ul.style.transitionDuration = '0s';
            ul.style.top = '0px';

            index = 0;
        }, 600);
    }

    ul.style.transitionDuration = '.4s';

    ul.style.top = -index * 50 + 'px';

}, 1000);