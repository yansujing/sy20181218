
var leftTimeout;

function getLeftTime() {
    var leftTimeContainer = document.getElementById('leftTime');

    var nowTime = new Date();

    var endTime = new Date("2019/02/18,10:21:40");

    var leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);

    console.log(leftTime);

    var day = parseInt((leftTime / 3600 / 24));

    console.log(day);

    var hours = parseInt((leftTime / 3600) % 24);

    console.log(hours);

    var minutes = parseInt((leftTime / 60) % 60);

    console.log(minutes);

    var seconds = parseInt(leftTime % 60);

    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    leftTimeContainer.innerText = day + '天' + hours + '时' + minutes + '分' + seconds + '秒';

    leftTimeout = setTimeout(getLeftTime, 1000);

    console.log(leftTime);

    if (leftTime === 0) {
        setTimeout(function () {
            alert('时间到了！！！');
        }, 1000);
        clearTimeout(leftTimeout);
    }
}


// setInterval(getLeftTime, 1000);


getLeftTime();

