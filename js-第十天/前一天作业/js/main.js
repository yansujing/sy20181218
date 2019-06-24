

var usernameEle = document.getElementsByClassName('username')[0];
var passwordEle = document.getElementsByClassName('password')[0];

var tipsEle = document.getElementsByClassName('tip');

var switchPasswordEle = document.getElementsByClassName('switch-password')[0];

var loginEle = document.getElementById('login');


var regexpList = {
    username: /^[a-zA-Z0-9_]{4,16}$/,
    password: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
}

var validateFrom = {
    username: false,
    password: false
};

usernameEle.oninput = function () {

    validateFrom.username = regexpList.username.test(this.value);

    if (!validateFrom.username) {
        tipsEle[0].style.display = 'block';
    } else {
        tipsEle[0].style.display = 'none';
    }

}

passwordEle.oninput = function () {

    if (this.value) {
        switchPasswordEle.style.display = 'block';
    } else {
        switchPasswordEle.style.display = 'none';
    }

    validateFrom.password = regexpList.password.test(this.value);

    if (!validateFrom.password) {
        tipsEle[1].style.display = 'block';
    } else {
        tipsEle[1].style.display = 'none';
    }

}

switchPasswordEle.onclick = function () {

    if (passwordEle.type === 'password') {
        passwordEle.type = 'text';
        this.innerText = '隐藏';
    } else {
        passwordEle.type = 'password';
        this.innerText = '显示';
    }

}

loginEle.onclick = function () {

    if (validateFrom.username && validateFrom.password) {
        console.log(1);
    } else {
        console.log(2);
    }

}

