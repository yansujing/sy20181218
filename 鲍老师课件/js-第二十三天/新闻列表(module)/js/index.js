
import { ajaxPromise } from './ajax.js';

import { apiInfo } from './api.js';

const con = document.getElementsByClassName("con")[0];

const sp1 = document.getElementsByClassName("page_sp1")[0];

const sp2 = document.getElementsByClassName("page_sp2")[0];

const fbtn = document.getElementsByClassName("first_btn")[0];

const sbtn = document.getElementsByClassName("sec_btn")[0];
console.log(con, sp1, sp2, fbtn, sbtn);

let total_page_counts;

let page_index = 1;

let lastExtendIndex = 0;

//根据页码加载数据
function loadList(index) {
    sp1.innerText = index;
    const data = `page=${index}&limit=5`;
    const obj = {
        method: "POST",
        url: apiInfo.list,
        async: true,
        data: data,
        dataType: 'form'
    };

    async function getList() {
        const responseData = await ajaxPromise(obj);

        console.log(responseData);

        const data = JSON.parse(responseData).data;

        total_page_counts = Math.ceil(data.total_rows / 5);

        sp2.innerText = total_page_counts;

        con.innerHTML = "";

        data.page_data.map(function (x, index) {
            console.log(x);

            const li = document.createElement("li");

            const a = document.createElement("a");
            a.innerText = x.title;
            a.href = "detail.html";
            a.target = "_blank";

            a.onclick = function () {
                sessionStorage.setItem("id", x.id);
            }

            li.appendChild(a);
            con.appendChild(li);
        })

    }
    // 调用异步函数
    getList();
}

// 加载第一页数据
loadList(page_index);

fbtn.onclick = () => {
    if (page_index === 1) {
        alert("已经是最小页码！！");
        return;
    }
    page_index--;
    console.log(page_index);
    loadList(page_index);
}
sbtn.onclick = () => {
    if (page_index === total_page_counts) {
        alert("已经是最大页码！！");
        return;
    }
    page_index++;
    console.log(page_index);
    loadList(page_index);
}