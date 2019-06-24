var un = document.getElementById("user");
var pw = document.getElementById("password");
var rb = document.getElementById("remember");

var btn = document.getElementById("btn");


// 设置cookie的函数
function setCookie(key, value, days) {
    var date = new Date();

    date.setTime(date.getTime() + (days * 24) * 3600 * 1000);

    console.log(date);

    document.cookie = key + '=' + value + '; expires=' + date;
}

// 根据key获取cookie值
function getCookie(key) {
    var cookieArr = document.cookie.split('; ');

    console.log(cookieArr);

    var returnVaule;

    cookieArr.map(function (item) {
        if (key === item.split('=')[0]) {
            returnVaule = item.split('=')[1];
        }
    });

    return returnVaule;
}

// 删除cookie
function deleteCookie(key) {
    setCookie(key, '', -1);
}

if (document.cookie) {

    un.value = getCookie('user');

    pw.value = getCookie('password');


    console.log(JSON.parse('false'));

    rb.checked = JSON.parse(getCookie('remember'));

}

btn.onclick = function () {

    if (rb.checked) {
        setCookie('user', un.value, 5);
        setCookie('password', pw.value, 5);
        setCookie('remember', JSON.stringify(rb.checked), 5);

        alert('用户信息已保存！');
    } else {
        setCookie('user', '', -1);
        setCookie('password', '', -1);
        setCookie('remember', '', -1);

        alert('用户信息已删除！');
    }

}



