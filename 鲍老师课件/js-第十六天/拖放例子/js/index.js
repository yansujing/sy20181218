var lis = document.getElementsByClassName('con1-li');


for (var i = 0; i < lis.length; i++) {
    lis[i].ondragstart = function (e) {

        e.dataTransfer.setData('text', e.target.innerText);

    }
}

document.getElementsByClassName('con2')[0].ondragover = function (e) {

    e.preventDefault();

    this.style.borderWidth = '15px';

}

document.getElementsByClassName('con2')[0].ondrop = function (e) {

    // drop 事件的默认行为是以链接形式打开
    e.preventDefault();

    this.style.borderWidth = '1px';

    var div = document.createElement('div');
    div.className = 'con2-div';

    div.innerText = e.dataTransfer.getData('text');

    this.appendChild(div);

}

document.getElementsByClassName('con2')[0].ondragleave = function (e) {

    console.log('leave');

}