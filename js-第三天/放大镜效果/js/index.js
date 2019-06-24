

window.onload = function () {
    var bigEle = document.getElementsByClassName('big')[0];

    var containerEle = document.getElementsByClassName('container')[0];

    var cubeEle = document.getElementsByClassName('cube')[0];

    var imgEle = document.getElementsByClassName('big-img')[0];

    // 左侧容器offsetTop、offsetLeft与offsetWidth、offsetHeight
    var containerEleTop = containerEle.offsetTop;
    var containerEleLeft = containerEle.offsetLeft;
    var containerEleWidth = containerEle.offsetWidth;
    var containerEleHeight = containerEle.offsetHeight;

    console.log(containerEleHeight);

    // 定位右侧元素
    bigEle.style.top = containerEleTop + 'px';
    bigEle.style.left = containerEleLeft + containerEleWidth + 'px';

    containerEle.onmousemove = function (e) {
        bigEle.style.display = 'block';
        cubeEle.style.display = 'block';

        // 小方块宽高
        var cubeEleWidth = cubeEle.offsetWidth;
        var cubeEleHeight = cubeEle.offsetHeight;

        // 鼠标在左侧容器中的位置
        var mouseX = e.pageX - containerEleLeft;
        var mouseY = e.pageY - containerEleTop;

        // 小方块位置
        var cubeEleTop = mouseY - cubeEleHeight / 2;
        var cubeEleLeft = mouseX - cubeEleWidth / 2;

        // console.log(cubeEleTop, cubeEleLeft);

        cubeEle.style.top = cubeEleTop + 'px';
        cubeEle.style.left = cubeEleLeft + 'px';

        // 右侧图片位置
        imgEle.style.top = -4 * cubeEleTop + 'px';
        imgEle.style.left = -4 * cubeEleLeft + 'px';


        if (mouseX <= cubeEleWidth / 2) {
            cubeEle.style.left = '0px';
            imgEle.style.left = '0px';
        }

        if (mouseX >= containerEleWidth - cubeEleWidth / 2) {
            cubeEle.style.left = (containerEleWidth - cubeEleWidth) + 'px';
            imgEle.style.left = -4 * (containerEleWidth - cubeEleWidth) + 'px';
        }

        if (mouseY <= cubeEleHeight / 2) {
            cubeEle.style.top = '0px';
            imgEle.style.top = '0px';
        }

        console.log(mouseY, containerEleHeight);

        if (mouseY >= containerEleHeight - cubeEleHeight / 2) {
            cubeEle.style.top = (containerEleHeight - cubeEleHeight) + 'px';
            imgEle.style.top = -4 * (containerEleHeight - cubeEleHeight) + 'px';
        }
    }

    containerEle.onmouseleave = function () {
        bigEle.style.display = 'none';
        cubeEle.style.display = 'none';
    }
}

