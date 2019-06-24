

// jquery动画

// jquery内置了一些常见的 动画方法 并且允许开发者 自定义动画

// show(),hide(),toggle():jquery对象的方法
// 参数1：动画的持续时间，参数2：动画的执行效果，参数3：动画执行完之后执行的回调函数

function fn1() {
    alert(1);
}

// $('#toggle').click(function () {
//     if ($('.con1').css('display') === 'none') {
//         $('.con1').show(1000);
//     } else {
//         $('.con1').hide(1000);
//     }
// });

$('#toggle1').click(function () {
    $('.con1').toggle(1000)
});


// slideDown(),slideUp(),slideToggle()
$('#toggle2').click(function () {
    $('.con1').slideToggle(1000);
});


// fadeIn(),fadeOut(),fadeToggle()
$('#toggle3').click(function () {
    $('.con1').fadeToggle(1000);
});


// 自定义动画：animate()
// 参数1：样式的一个集合，参数2：动画的持续时间，参数3：动画的执行效果，动画执行完之后执行的回调函数

// delay():延迟动画执行时间

$('#toggle4').click(function () {
    $('.con1').animate({
        width: '300px',
        height: '100px',
        opacity: '0'
    }, 2000, function () {
        // alert(1);
    }).delay(2000).animate({
        width: '800px',
        height: '200px',
        opacity: '1'
    }, 1000);
});




