

// this关键字：只有函数中才有的关键字，this指向调用了当前函数的对象

// 1.函数有所属对象，this就指向所属对象
// 2.函数没有所属对象，this就指向window

function fn1() {
    console.log(this);
}

fn1();

var name = 'Bao';

var obj = {
    name: 'Steel',
    run: function () {
        console.log(this.name);
    }
}

obj.run();

document.getElementById('p1').onclick = function () {
    console.log(this);
}

var obj1 = {
    name: 'Steel',
    talk: function () {
        console.log(this);
        function hello() {
            console.log(this.name);
        }
        hello();
    }
}

obj1.talk();

var arr = [1, 2, 3];

arr.map(function (item) {
    console.log(this);
})

setTimeout(function () {
    console.log(this);
}, 1000);
