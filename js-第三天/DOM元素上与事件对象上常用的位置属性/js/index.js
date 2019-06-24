

// DOM元素上常用的属性

// offsetTop:DOM元素顶部距离可视窗口顶部的距离
// offsetLeft:DOM元素左侧距离可视窗口左侧的距离

// offsetWidth:DOM元素的宽度（包含边框）
// offsetHeight:DOM元素的高度（包含边框）

// clientWidth:DOM元素的宽度（不包含边框）
// clientHeight:DOM元素的高度（不包含边框）


var div1 = document.getElementsByClassName('div1')[0];

console.log(div1.offsetWidth);
console.log(div1.offsetHeight);

console.log(div1.clientWidth);
console.log(div1.clientHeight);

console.log(div1.offsetTop);
console.log(div1.offsetLeft);



// 事件对象上常用的属性

// clientX: 鼠标相对于当前页面的X轴的坐标距离（且不包含滚动条距离）
// clientY: 鼠标相对于当前页面的Y轴的坐标距离（且不包含滚动条距离）

// pageX: 鼠标相对于文档的X轴的坐标距离（包含滚动条距离）
// pageY: 鼠标相对于文档的Y轴的坐标距离（包含滚动条距离）

div1.onmousemove = function (e) {
    console.log(e.clientX, e.clientY);
    console.log(e.pageX, e.pageY);
}


