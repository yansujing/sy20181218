
var tbodyEle = $('tbody');

var editCoverEle = $('.cover');

var cancelEle = $('#cancel');
var saveEle = $('#save');

var nameEle = $('#name');
var addressEle = $('#address');
var zipCodeEle = $('#zipCode');

var sortListEle = $('.date > i');
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

    tbodyEle.html('');

    list.map(function (item) {

        var tr = $('<tr class="user-info-item"></tr>');

        var td1 = $('<td>' + item.date + '</td>');

        var td2 = $('<td>' + item.name + '</td>');

        var td3 = $('<td>' + item.address + '</td>');

        var td4 = $('<td>' + item.zipCode + '</td>');

        var td5 = $('<td><button class="edit" data-id=' + item.id + '>编辑</button></td>');

        td5.find('.edit').click(function () {
            editCoverEle.addClass('cover appear');

            console.log(this);
            id = $(this).attr('data-id');

            var obj = getDataById(id, list).data;

            nameEle.val(obj.name);
            addressEle.val(obj.address);
            zipCodeEle.val(obj.zipCode);

            currentTrEle = $(this).parent().parent();

            console.log(currentTrEle);
        });

        var btn2 = $('<button class="del">删除</button>');

        btn2.click(function () {
            // 删除当前DOM元素
            $(this).parent('.user-info-item').remove();
        });

        td5.append(btn2);

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);

        tbodyEle.append(tr);
    });
}
renderTableByList(list);

// 取消
cancelEle.click(function () {
    editCoverEle.attr('class', 'cover');
})
// 保存
saveEle.click(function () {
    editCoverEle.attr('class', 'cover');


    var tdList = currentTrEle.children();
    console.log(tdList);

    console.log($(tdList[1]));

    $(tdList[1]).text(nameEle.val());
    $(tdList[2]).text(addressEle.val());
    $(tdList[3]).text(zipCodeEle.val());

    console.log(id);

    var index = getDataById(id, list).index;

    list[index].name = nameEle.val();
    list[index].address = addressEle.val();
    list[index].zipCode = zipCodeEle.val();


    console.log(list);

});

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
