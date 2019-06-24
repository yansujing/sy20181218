

var lisEle = document.querySelectorAll('.swiper > li');
console.log(lisEle);

var circlesEle = document.querySelectorAll('.circle-ul > li');
console.log(circlesEle);

var container = document.getElementsByClassName("container")[0];

var arrows = document.getElementsByClassName("arrow");

// 显示图片的最大索引
var maxIndex = lisEle.length - 1;

var index = 0;

// 定时器变量
var s;

var obj1 = {
    index: 0,
    eleCollection: lisEle,
    style: {
        name: 'display', value: ['none', 'block']
    }
};

var obj2 = {
    index: 0,
    eleCollection: circlesEle,
    style: {
        name: 'backgroundColor', value: ['white', 'red']
    }
}

// 根据索引设置相应元素的相应样式
function setEleByIndex(obj) {

    for (var i = 0; i < obj.eleCollection.length; i++) {
        obj.eleCollection[i].style[obj.style.name] = obj.style.value[0];
    }

    obj.eleCollection[index].style[obj.style.name] = obj.style.value[1];

}

// 播放轮播图
function play() {

    s = setInterval(function () {

        if (index === maxIndex) {
            index = 0;
        } else {
            index++;
        }

        console.log(index);

        obj1.index = index;
        obj2.index = index;

        setEleByIndex(obj1);
        setEleByIndex(obj2);

    }, 1000);

}

play();

container.onmouseenter = function () {
    clearInterval(s);
}

container.onmouseleave = function () {
    play();
}


// 左箭头
arrows[0].onclick = function () {

    if (index === 0) {
        index = maxIndex;
    } else {
        index--;
    }

    console.log(index);

    obj1.index = index;
    obj2.index = index;
    setEleByIndex(obj1);
    setEleByIndex(obj2);
}

// 右箭头
arrows[1].onclick = function () {

    if (index === maxIndex) {
        index = 0;
    } else {
        index++;
    }

    console.log(index);

    obj1.index = index;
    obj2.index = index;
    setEleByIndex(obj1);
    setEleByIndex(obj2);

}


