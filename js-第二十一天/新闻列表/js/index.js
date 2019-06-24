

const ul = document.getElementsByClassName('con')[0];

const pageTotalSpan = document.getElementsByClassName('page_sp2')[0];
const pageSpan = document.getElementsByClassName('page_sp1')[0];

const lastBtn = document.getElementsByClassName('first_btn')[0];
const nextBtn = document.getElementsByClassName('sec_btn')[0];


let pageTotal = 0;

let page = 1;

let limit = 8;


// 根据页码获取数据
async function getDataByPage(page) {

    const obj = {
        method: 'POST',
        url: 'http://www.bozedu.net:8888/article/main/index',
        async: true,
        data: 'page=' + page + 'limit=' + limit,
        dataType: 'form'
    }

    const responseData = await ajaxPromise(obj);

    ul.innerHTML = '';

    const data = JSON.parse(responseData).data;

    console.log(data);

    pageTotal = Math.ceil(Number(data.total_rows) / limit);
    pageTotalSpan.innerText = pageTotal;
    pageSpan.innerText = page;

    data.page_data.map(function (item) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.title;
        a.href = './detail.html';
        a.target = 'blank';
        a.onclick = function () {
            sessionStorage.setItem('id', item.id)
        }
        li.appendChild(a);
        ul.appendChild(li);
    });
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



