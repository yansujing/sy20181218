
var tbodyEle = document.querySelector('tbody');

var list = [
    {
        id: '1',
        name: '小米6',
        price: 1699,
        count: 5
    },
    {
        id: '2',
        name: '红米3',
        price: 699,
        count: 2
    },
    {
        id: '3',
        name: '小米8',
        price: 2899,
        count: 3
    }
];

var goodsInfo = {
    totalCount: 0,
    checkCount: 0,
    totalPrice: 0
}


// list.map(function (item) {

//     var tr = document.createElement('tr');

//     var td1 = document.createElement('td');
//     var checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.onchange = function () {
//         calcGoods();
//     }
//     td1.appendChild(checkbox);

//     var td2 = document.createElement('td');
//     td2.innerText = item.name;

//     var td3 = document.createElement('td');
//     td3.innerText = item.price;

//     var td4 = document.createElement('td');
//     var btn1 = document.createElement('button');
//     btn1.innerText = '-';
//     var btn2 = document.createElement('button');
//     btn2.innerText = '+';
//     var input = document.createElement('input');
//     input.value = item.count;
//     td4.appendChild(btn1);
//     td4.appendChild(input);
//     td4.appendChild(btn2);

//     var td5 = document.createElement('td');
//     var btn = document.createElement('button');
//     btn.innerText = '删除';
//     td5.appendChild(btn);

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);

//     tr.className = 'goods'

//     tbodyEle.appendChild(tr);

// });

// var trs = document.getElementsByClassName('goods');
// console.log(trs);


// function calcGoods() {

//     goodsInfo.checkCount = 0;
//     goodsInfo.totalCount = 0;

//     for (var i = 0; i < trs.length; i++) {
//         goodsInfo.totalCount += Number(trs[i].children[3].children[1].value);
//         if (trs[i].children[0].children[0].checked) {
//             goodsInfo.checkCount += Number(trs[i].children[3].children[1].value);
//         }
//     }

//     console.log(goodsInfo);

// }




list.map(function (item) {
    item.check = false;
});

console.log(list);

// 删除按钮绑定事件
function delClick() {
    var delEle = document.getElementsByClassName('del');

    for (var i = 0; i < delEle.length; i++) {
        delEle[i].onclick = function () {
            var index = this.parentElement.parentElement.getAttribute('data-index');

            console.log(index);

            list.splice(index, 1);

            renderByList(list);
        }
    }
}

// 根据数据渲染出页面
function renderByList(list) {
    tbodyEle.innerHTML = '';
    list.map(function (item, index) {

        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.check;
        checkbox.onchange = function () {
        }
        td1.appendChild(checkbox);

        var td2 = document.createElement('td');
        td2.innerText = item.name;

        var td3 = document.createElement('td');
        td3.innerText = item.price;

        var td4 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.innerText = '-';
        var btn2 = document.createElement('button');
        btn2.innerText = '+';
        var input = document.createElement('input');
        input.value = item.count;
        td4.appendChild(btn1);
        td4.appendChild(input);
        td4.appendChild(btn2);

        var td5 = document.createElement('td');
        var btn = document.createElement('button');
        btn.innerText = '删除';
        btn.className = 'del';
        td5.appendChild(btn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tr.className = 'goods';

        tr.setAttribute('data-index', index);

        tbodyEle.appendChild(tr);

    });

    delClick();
}

renderByList(list);



