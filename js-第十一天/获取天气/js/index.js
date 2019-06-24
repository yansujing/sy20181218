
var select = document.getElementById("select");
console.log(select);

var ul = document.getElementById("ul");
console.log(ul);

var load = document.getElementsByClassName('loading')[0];
console.log(load);

console.log(select.value);

// 根据城市获取天气数据
function getWeatherByCity(city) {

    load.style.display = 'block';

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {

                ul.innerHTML = '';

                load.style.display = 'none';

                console.log(JSON.parse(request.responseText).data.forecast);

                var list = JSON.parse(request.responseText).data.forecast;

                list.map(function (item) {
                    var li = document.createElement('li');
                    var p1 = document.createElement('p');
                    p1.innerText = item.date;
                    var p2 = document.createElement('p');
                    p2.innerText = item.high;

                    li.appendChild(p1);
                    li.appendChild(p2);

                    li.style.opacity = '0';
                    li.style.transform = 'translateY(50px)';

                    ul.appendChild(li);
                });

                for (var i = 0; i < ul.children.length; i++) {
                    (function (j) {
                        setTimeout(function () {
                            console.log(j);
                            ul.children[j].style.opacity = '1';
                            ul.children[j].style.transform = 'translateY(0px)';
                        }, 300 * (j + 1));
                    })(i);
                }

            }
        }
    }

    request.open('GET', 'https://www.apiopen.top/weatherApi?city=' + city);

    request.send();
}

getWeatherByCity(select.value);

select.onchange = function () {
    getWeatherByCity(this.value);
}


