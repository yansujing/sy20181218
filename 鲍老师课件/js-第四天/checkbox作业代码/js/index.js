

var moveEle = document.getElementById('move');

var ballsEle = document.getElementsByClassName('ball');

var ballUlEle = document.getElementsByClassName('checked-sports-ul')[0];

var checkedAllEle = document.getElementById('checked-all');

// 设置是否全选
function setCheckedAll(checked) {
    for (var i = 0; i < ballsEle.length; i++) {
        ballsEle[i].checked = checked;
    }
}

// 设置全选框的状态
function setCheckedAllStatus() {
    for (var i = 0; i < ballsEle.length; i++) {
        if (!ballsEle[i].checked) {
            checkedAllEle.checked = false;
            break;
        }
        checkedAllEle.checked = true;
    }
}

// 渲染结果
function renderResult() {
    ballUlEle.innerHTML = '';

    for (var i = 0; i < ballsEle.length; i++) {
        if (ballsEle[i].checked) {
            console.log(ballsEle[i].getAttribute('data-ball'));

            var li = document.createElement('li');

            li.innerText = ballsEle[i].getAttribute('data-ball');

            ballUlEle.appendChild(li);
        }
    }
}

moveEle.onclick = function () {
    renderResult()
}

// 给checkbox元素绑定 change 事件
checkedAllEle.onchange = function () {
    setCheckedAll(checkedAllEle.checked);
}

for (var i = 0; i < ballsEle.length; i++) {
    ballsEle[i].onchange = function () {
        setCheckedAllStatus();
    }
}
