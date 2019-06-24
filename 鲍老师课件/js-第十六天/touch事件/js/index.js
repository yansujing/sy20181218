

// touch事件：屏幕触摸事件

// touchstart：触摸开始事件
// touchmove：触摸移动事件
// touchend：触摸结束事件


// touches:当前屏幕上所有触摸点的集合
// targetTouches:当前对象上所有触摸点的集合
// changedTouches:当前事件被触发时的触摸点的集合

var touchAreaEle = document.getElementsByClassName('touch-area')[0];

touchAreaEle.ontouchstart = function (e) {
    console.log('touchstart');

    console.log(e);
}

touchAreaEle.ontouchmove = function (e) {
    console.log('touchmove');

    console.log(e);
}

touchAreaEle.ontouchend = function (e) {
    console.log('touchend');

    console.log(e);
}