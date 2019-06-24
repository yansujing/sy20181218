
var cityInputEle = document.getElementById("city");

var ul = document.getElementById("ul");

var flag = true;

var time = null;

// 根据城市获取天气数据
function getWeatherByCity(city) {
    console.log(1);

    if (city) {

        ul.innerText = '正在加载中...';

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    console.log(JSON.parse(request.responseText));

                    var responseData = JSON.parse(request.responseText);

                    if (responseData.code === 200) {
                        ul.innerHTML = '';
                        responseData.data.forecast.map(function (item) {
                            var li = document.createElement('li');
                            var p1 = document.createElement('p');
                            p1.innerText = item.date;
                            var p2 = document.createElement('p');
                            p2.innerText = item.high;

                            li.appendChild(p1);
                            li.appendChild(p2);

                            ul.appendChild(li);
                        });
                    } else {
                        ul.innerText = responseData.msg;
                    }
                }
            }
        }

        request.open('GET', 'https://www.apiopen.top/weatherApi?city=' + city);

        request.send();
    } else {
        ul.innerHTML = '';
    }
}

cityInputEle.oninput = function () {

    // 对函数进行 节流，简称 函数节流：函数不要被频繁调用

    // time && clearTimeout(time);

    if (time) {
        clearTimeout(time);
    }

    time = setTimeout(function () {
        getWeatherByCity(cityInputEle.value);
        // flag = true;
    }, 800);
}

