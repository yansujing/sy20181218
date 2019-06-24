
var tbodyEle = document.getElementsByClassName('tbody')[0];

var editCoverEle = document.getElementsByClassName('cover')[0];

var cancelEle = document.getElementById('cancel');
var saveEle = document.getElementById('save');

var nameEle = document.getElementById('name');
var addressEle = document.getElementById('address');
var zipCodeEle = document.getElementById('zipCode');

var sortListEle = document.querySelectorAll('.date > i');
console.log(sortListEle);


var currentTrEle;

var id;

var list = [
    {
        id: '1',
        date: '2015-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        zipCode: '200333'
    },
    {
        id: '2',
        date: '2016-11-04',
        name: '陈晨',
        address: '苏州市平江区',
        zipCode: '100000'
    },
    {
        id: '3',
        date: '2014-06-25',
        name: '宁浩',
        address: '常州市金坛区天宇人家',
        zipCode: '100001'
    },
    {
        id: '4',
        date: '2017-05-01',
        name: '张海',
        address: '安庆市大观区',
        zipCode: '100002'
    },
    {
        id: '5',
        date: '2016-11-05',
        name: '陈王',
        address: '合肥市包河区',
        zipCode: '100003'
    },
    {
        id: '6',
        date: '2015-05-02',
        name: '王浩',
        address: '北京市昌平区',
        zipCode: '100004'
    }
];

// 根据id返回相应数据
function getDataById(id, arr) {

    var obj = {
        data: {},
        index: 0
    }

    arr.map(function (item, index) {
        if (id === item.id) {
            obj.data = item;
            obj.index = index;
        }
    });

    return obj;

}

// console.log(getDataById('3', list));

// 根据数据渲染表格
function renderTableByList(list) {

    tbodyEle.innerHTML = '';

    list.map(function (item) {

        var tr = document.createElement('tr');
        tr.className = 'user-info-item';

        var td1 = document.createElement('td');
        td1.innerText = item.date;

        var td2 = document.createElement('td');
        td2.innerText = item.name;

        var td3 = document.createElement('td');
        td3.innerText = item.address;

        var td4 = document.createElement('td');
        td4.innerText = item.zipCode;

        var td5 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.className = 'edit';
        btn1.innerText = '编辑';

        btn1.setAttribute('data-id', item.id);

        btn1.onclick = function () {
            editCoverEle.className = 'cover appear';

            console.log(this.getAttribute('data-id'));

            id = this.getAttribute('data-id');

            console.log(getDataById(id, list));

            var obj = getDataById(id, list).data;

            nameEle.value = obj.name;
            addressEle.value = obj.address;
            zipCodeEle.value = obj.zipCode;

            currentTrEle = this.parentElement.parentElement;
        }

        var btn2 = document.createElement('button');
        btn2.className = 'del';
        btn2.innerText = '删除';

        btn2.onclick = function () {
            console.log(this.parentElement.parentElement);
            // 删除当前DOM元素
            this.parentElement.parentElement.remove();
            // tbodyEle.removeChild(this.parentElement.parentElement);
        }

        td5.appendChild(btn1);
        td5.appendChild(btn2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tbodyEle.appendChild(tr);
    });
}
renderTableByList(list);

// 取消
cancelEle.onclick = function () {
    editCoverEle.className = 'cover';
}
// 保存
saveEle.onclick = function () {
    editCoverEle.className = 'cover';

    console.log(currentTrEle);

    var tdList = currentTrEle.children;
    console.log(tdList);

    tdList[1].innerText = nameEle.value;
    tdList[2].innerText = addressEle.value;
    tdList[3].innerText = zipCodeEle.value;

    console.log(id);

    var index = getDataById(id, list).index;

    list[index].name = nameEle.value;
    list[index].address = addressEle.value;
    list[index].zipCode = zipCodeEle.value;


    console.log(list);

}

// 根据日期升降排序
function srotByDate(flag) {

    list.sort(function (a, b) {
        if (flag === 1) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        } else {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
    })

}
// srotByDate(1);

// console.log(list);

// 升序
sortListEle[0].onclick = function () {
    this.style.borderBottomColor = '#409eff';
    sortListEle[1].style.borderTopColor = '#c0c4cc';
    srotByDate(1);
    renderTableByList(list);
}
// 降序
sortListEle[1].onclick = function () {
    this.style.borderTopColor = '#409eff';
    sortListEle[0].style.borderBottomColor = '#c0c4cc';
    srotByDate(2);
    renderTableByList(list);
}
