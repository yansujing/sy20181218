

// jquery 扩展：是 jquery插件一种形式

console.dir($);

$.fn.fn1 = function () {
    // this指向调用了本方法的 jquery对象
    console.log(this);
}

// $.fn是 $对象的 原型对象，在$.fn上定义的属性和方法都会被jquery对象继承

console.log($.prototype === $.fn);

$('#div1').fn1();


$.fn.fn2 = function () {


    this.css({
        fontSize: '60px',
        backgroundColor: 'red'
    });

}


$('#div1').fn2();
