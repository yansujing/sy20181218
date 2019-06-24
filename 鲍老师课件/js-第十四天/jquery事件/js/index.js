

// 事件绑定

// document.getElementsByClassName('btn')[0].onclick = function () {
//     alert(1);
// }

$('.btn').click(function (e) {
    alert(1);
    console.log(e);
})

// mouseenter
// mouseleave
// mousemove
// hover:鼠标进入和移出事件

// $('.con').mouseenter(function(){
//     console.log('鼠标进入');
// })

// $('.con').mouseleave(function(){
//     console.log('鼠标离开');
// })

$('.con').hover(function () {
    console.log('鼠标进入');
}, function () {
    console.log('鼠标离开');
})

// keydown
// keyup
// keypress

// focus
// blur
// change

$('.search').keydown(function (e) {
    console.log(e);
    if (e.keyCode === 13) {
        console.log('搜索');
    }
})

$('.search').change(function (e) {
    console.log('change');
})