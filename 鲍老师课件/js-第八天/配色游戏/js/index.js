

var lis = document.querySelectorAll('.subject-ul > li');
console.log(lis);

var subjectEle = document.getElementsByClassName('title')[0];

var subjectUlEle = document.getElementsByClassName('subject-ul')[0];

var scoreEle = document.getElementsByClassName('score')[0];

var leftTimeEle = document.getElementById('time');

var btn = document.getElementById('btn');


// 初始数据
var initArr = [
    {
        word: '紫',
        color: 'purple'
    },
    {
        word: '黄',
        color: 'yellow'
    },
    {
        word: '红',
        color: 'red'
    },
    {
        word: '黑',
        color: 'black'
    },
    {
        word: '绿',
        color: 'green'
    }
];

var len = initArr.length;

// 题目对象
var subject;

// 剩余时间
var leftTime = 60;

// 定时器
var time = null;

// 分数
var score = 0;

// 随机打乱数组
function randomArr(arr) {

    var copyArr = arr.slice(0);

    var newArr = [];

    for (var i = 0; i < len; i++) {

        var index = parseInt(Math.random() * (copyArr.length));

        newArr.push(copyArr[index]);

        copyArr.splice(index, 1);
    }

    return newArr;

}

// 创建题目和答案数据并渲染
function createSubjectAndRender() {

    var resultArr = randomArr(initArr.slice(0));

    var arr = randomArr(initArr);

    arr.map(function (item, index) {
        item.data = resultArr[index].word;

        lis[index].innerText = item.data;
        lis[index].style.color = item.color;
    });

    var index1 = parseInt(Math.random() * len);
    subject = arr[index1];
    var index2 = parseInt(Math.random() * len);

    subject.data = arr[index2].data;

    console.log(subject);

    subjectEle.innerText = subject.data;
    subjectEle.style.color = subject.color;

}

createSubjectAndRender();

subjectUlEle.onclick = function (e) {
    console.log(e.target.innerText);

    if (e.target.innerText === subject.word && leftTime !== 0) {
        score++;
        scoreEle.innerText = score;
    }

    createSubjectAndRender();
}

// 游戏倒计时
function leftTimeInterval() {
    if (!time) {
        time = setInterval(function () {

            if (leftTime === 0) {
                clearInterval(time);
                time = null;
                alert('游戏结束！');
                return;
            }

            leftTime--;

            var x = leftTime < 10 ? '0' + leftTime : leftTime

            leftTimeEle.innerText = x;

        }, 1000);
    }
}
leftTimeInterval();


// 重新开始按钮点击事件
btn.onclick = function () {
    createSubjectAndRender();

    leftTime = 61;

    score = 0;

    scoreEle.innerText = score;

    leftTimeInterval();
}

