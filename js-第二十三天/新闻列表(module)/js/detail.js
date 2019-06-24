
import { ajaxPromise } from './ajax.js';

import { apiInfo } from './api.js';


const detailDom = document.getElementsByClassName("detail")[0];

console.log(sessionStorage.getItem("id"));

const id = sessionStorage.getItem("id");

const obj = {
    method: "GET",
    url: `${apiInfo.detail}?id=${id}`,
    async: true,
    data: null
}

async function getDetails() {
    const responseData = await ajaxPromise(obj);

    console.log(responseData);

    const data = JSON.parse(responseData).data;

    console.log(data);

    detailDom.innerHTML = data.content;
}
getDetails();