

// jquery:是一种js库，封装了一些常用API供开发者直接使用

// jquery主要作用：简化DOM操作（核心），并提供了一些常用方法（ajax，动画，事件绑定）


// jquery选择器，$:是一个函数，可以接收一个选择器字符串作为参数，也可以接收html字符串，还可以接收原生DOM元素，返回值是 一个jquery对象（类似于数组的对象，并且数组的每一个元素都是DOM元素对象）

console.dir($);
console.dir(jQuery === $);

var listEle = document.getElementsByClassName('list')[0];
console.log(listEle);

var listEleJquery = $('.list li');
console.log(listEleJquery);


console.log($('.div1 span'));
console.log($('.p1 > span'));


// find():jquery对象的方法，参数：选择器字符串，返回值一个jquery对象

console.log($('.div1').find('span'));

// parent():jquery对象的方法，获取父节点的jquery对象

console.log($('.div1').find('span').parent());

// next()，prev(),同一层级的上一个元素和下一个元素，参数：选择器字符串

console.log($('.p1').next('#app'));


// jquery选择器是不会返回 undefined的


// filter():过滤掉不符合选择器的元素
console.log($('.list > li').filter('.item'));

// first(),last()
console.log($('.list > li').first());
console.log($('.list > li').last());

// map()
$('.list > li').map(function (index, item) {
    console.log(item);
})



// DOM操作

// text()
$('.list > li').text('123456');

// html()
$('.list > li').html('<a href="https://www.baidu.com">百度一下</a>');
$('.list > li').html('<a href="https://www.baidu.com">百度一下111</a>');

// css():返回的还是jquery对象
console.log($('.list > li').css({ "color": "#ff0011", "background": "blue" }).css('background-color', 'red').filter('.item').css('background-color', 'black'));

// 链式调用


// addClass()
$('.list > li').addClass('li1')
$('.list > li').addClass('li2')

// removeClass()
$('.list > li').removeClass('li1')

// width(),height()，获取元素的宽高，包括边框和padding
console.log($('.list > li').width());
console.log($('.list > li').height());

// attr();设置元素属性
$('.list > li').attr('tilte', '我是li元素');
$('.list > li').attr('data-tilte', '我是li元素');

// val():获取表单元素的值
document.getElementById('input1').onchange = function () {
    console.log($('#input1').val());
}
$('#input1').val('1234');



// append(),remove()

// $('.p1').append('<a href="https://www.baidu.com">百度一下</a>')
$('.p1').append($('<a href="https://www.baidu.com">百度一下</a>'));

// $('.p1').remove();


// $()可以将原生DOM元素转换成 jquery对象
console.log($(document.getElementById('input1')));










