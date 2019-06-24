

var ul = document.getElementsByClassName('con')[0];

var pageTotalSpan = document.getElementsByClassName('page_sp2')[0];
var pageSpan = document.getElementsByClassName('page_sp1')[0];

var lastBtn = document.getElementsByClassName('first_btn')[0];
var nextBtn = document.getElementsByClassName('sec_btn')[0];


var pageTotal = 0;

var page = 1;

var limit = 8;


// 根据页码获取数据
function getDataByPage(page) {

    var obj = {
        method: 'POST',
        url: 'http://www.bozedu.net:8888/article/main/index',
        async: true,
        data: 'page=' + page + 'limit=' + limit,
        dataType: 'form',
        callback: function (responseData) {
            console.log(responseData);

            ul.innerHTML = '';

            var data = JSON.parse(responseData).data;

            console.log(data);

            pageTotal = Math.ceil(Number(data.total_rows) / limit);
            pageTotalSpan.innerText = pageTotal;
            pageSpan.innerText = page;

            data.page_data.map(function (item) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.innerText = item.title;
                a.href = './detail.html?' + item.id;
                a.target = 'blank';
                li.appendChild(a);
                ul.appendChild(li);
            });

        }
    }

    ajaxfn(obj);
}

getDataByPage(page);

// 按钮点击事件
lastBtn.onclick = function () {

    if (page === 1) {
        alert('已经是最小页码！');
        return;
    }

    page--;

    getDataByPage(page);
}
nextBtn.onclick = function () {

    if (page === pageTotal) {
        alert('已经是最大页码！');
        return;
    }

    page++;
    getDataByPage(page);
}



