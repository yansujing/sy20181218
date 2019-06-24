

var moveEle = document.getElementById('move');

var ballsEle;

var ballUlEle = document.getElementsByClassName('checked-sports-ul')[0];

var checkedAllEle = document.getElementById('checked-all');

var ballListUlEle = document.getElementsByClassName('sports-checkbox-ul')[0];

var arr = [
    {
        ballName: '篮球',
        checked: false
    },
    {
        ballName: '足球',
        checked: false
    },
    {
        ballName: '网球',
        checked: true
    },
    {
        ballName: '桌球',
        checked: false
    },
    {
        ballName: '排球',
        checked: true
    }
];

// 渲染球类列表
function renderBallsList(arr) {
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.className = 'fl sports-checkbox-li';

        var label = document.createElement('label');

        var input = document.createElement('input');
        input.className = 'ball';
        input.setAttribute('data-ball', arr[i].ballName);
        input.type = 'checkbox';
        input.checked = arr[i].checked;

        var span = document.createElement('span');
        span.innerText = arr[i].ballName;

        label.appendChild(input);
        label.appendChild(span);

        li.appendChild(label);

        ballListUlEle.appendChild(li);
    }
}

renderBallsList(arr);

ballsEle = document.getElementsByClassName('ball');

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
