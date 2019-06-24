
var btns = document.getElementsByClassName('btn');

console.log(btns);

var contents = document.getElementsByClassName('tab-content-item');

console.log(contents);

// 保存点击按钮的索引
var lastIndex = 0;

// for (var i = 0; i < btns.length; i++) {
//     (function (j) {
//         btns[j].onclick = function () {
//             console.log(j);

//             contents[lastIndex].style.display = 'none';

//             lastIndex = j;

//             contents[j].style.display = 'block';

//         }
//     })(i);
// }


// DOM元素可以自定义属性

// for (var i = 0; i < btns.length; i++) {
//     btns[i].onclick = function (e) {

//         console.log(e.target.getAttribute('data-index'));

//         var index = Number(e.target.getAttribute('data-index'));

//         contents[lastIndex].style.display = 'none';

//         lastIndex = index;

//         contents[index].style.display = 'block';

//     }
// }

var tabBtns = document.getElementsByClassName('tab-btns')[0];
// 事件冒泡机制
tabBtns.onclick = function (e) {
    var index = Number(e.target.getAttribute('data-index'));

    contents[lastIndex].style.display = 'none';

    lastIndex = index;

    contents[index].style.display = 'block';
}