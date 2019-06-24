

// 事件冒泡：当在某个DOM元素上触发某个事件时，事件会一直向父级元素传递，传递的过程中
// 只要有事件处理函数就会执行


var a = document.getElementsByClassName('a')[0];

var li = document.getElementsByClassName('li')[0];

var ul = document.getElementsByTagName('ul')[0];

a.onclick = function (e) {
    alert(1);

    // 通过事件对象的 cancelBubble属性置为true 来阻止冒泡
    // e.cancelBubble = true;
}

li.onclick = function (e) {
    alert(2);

    e.cancelBubble = true;
}

ul.onclick = function (e) {
    console.log(e);

    alert(e.target.getAttribute('data-index'));
}

