// console.log(document.getElementsByTagName('h1'));

// var h1 = document.getElementsByTagName('h1')[0];

// h1.innerText = '<a href="https://www.baidu.com">百度一下</a>';

// h1 = '<a href="https://www.baidu.com">百度一下</a>';

// h1.innerHTML = '';


// appendChild：DOM元素的方法，在某个DOM元素末尾添加某个子元素，接收DOM元素作为参数

// createElement:是 document对象的方法，创建某个DOM元素，接收一个元素名称字符串作为参数，返回值是创建的某个DOM元素

// document.createElement('a');

var h1 = document.getElementsByTagName('h1')[0];

var a = document.createElement('a');

a.innerText = '百度一下';

a.href = 'https://www.baidu.com';

for (var i = 0; i < 10; i++) {
    var a = document.createElement('a');

    a.innerText = '百度一下';

    a.href = 'https://www.baidu.com';

    h1.appendChild(a);
}

// h1.appendChild(a);
// h1.appendChild(a);
// h1.appendChild(a);
// h1.appendChild(a);
// h1.appendChild(a);

// removeChild:从某个DOM元素中删除某个子元素，接收DOM元素作为参数

// children:获取某个元素的所有子元素
// parentElement:获取某个元素的父元素

console.log(h1.children);
console.log(h1.parentElement);

h1.removeChild(h1.children[9]);

console.log(h1.children[0].parentElement);


console.log(document.getElementById('ul').children[2].innerText);

console.log(document.getElementsByClassName('li3')[0].innerText);

console.log(document.querySelector('ul .li3'));