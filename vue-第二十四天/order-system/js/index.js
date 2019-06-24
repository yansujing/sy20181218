
import ajax from './ajax.js';
console.log(ajax);

import { tab } from './tab.js';

tab(document.getElementsByClassName('tab1')[0]);

console.dir(document.getElementsByClassName('tab1')[0]);

const productEle = document.getElementsByClassName('product')[0];

async function getList() {

    const obj = {
        method: "GET",
        url: '/order-system/data/list.json',
        async: true
    };

    const data = await ajax(obj);

    const list = JSON.parse(data);

    console.log(list);

    const idList = [];

    function renderCurrentOrder(obj) {
        const ul = document.createElement('ul');
        ul.setAttribute('data-id', obj.id);
        ul.className = 'order-content-ul clearfix';
        const li1 = document.createElement('li');
        li1.innerText = obj.name;
        li1.className = 'fl order-content-item';
        const li2 = document.createElement('li');
        li2.innerText = ++obj.count;
        li2.className = 'fl order-content-item';
        const li3 = document.createElement('li');
        li3.innerText = obj.price;
        li3.className = 'fl order-content-item';
        const li4 = document.createElement('li');
        li4.className = 'fl order-content-item';
        const p = document.createElement('p');
        const span1 = document.createElement('span');
        span1.innerText = '删除'

        span1.onclick = function () {
            this.parentNode.parentNode.parentNode.remove();
            idList.splice(idList.indexOf(obj.id), 1);
        }

        const span2 = document.createElement('span');
        span2.innerText = '-'
        const span3 = document.createElement('span');
        span3.innerText = '+';
        p.appendChild(span1);
        p.appendChild(span2);
        p.appendChild(span3);
        li4.appendChild(p);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);

        document.getElementsByClassName('order-content')[0].appendChild(ul);
    }

    list.map(item1 => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = item1.classify;
        const ul = document.createElement('ul');

        item1.productList.map(item2 => {
            const li = document.createElement('li');
            li.setAttribute('data-goods', JSON.stringify(item2));
            const img = document.createElement('img');
            img.src = item2.imgUrl;
            const p = document.createElement('p');
            p.innerText = `${item2.name} ${item2.price}(元)`;
            const button = document.createElement('button');
            button.innerText = '点击添加';

            button.onclick = function () {
                // console.log(li);
                // console.log(item2.id);
                const index = idList.indexOf(item2.id);
                if (index === -1) {
                    renderCurrentOrder(JSON.parse(li.getAttribute('data-goods')));
                    idList.push(item2.id);
                } else {
                    const uls = document.querySelectorAll('#current-order > ul');
                    let count = Number(uls[index].children[1].innerText);
                    uls[index].children[1].innerText = ++count;
                }

                console.log(idList);
            }

            li.appendChild(img);
            li.appendChild(p);
            li.appendChild(button);

            ul.appendChild(li);
        })

        div.appendChild(h2);
        div.appendChild(ul);

        productEle.append(div);
    });

}

getList();