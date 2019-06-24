

var uploadAreaEle = document.getElementById('upload_area');

uploadAreaEle.ondragover = function (e) {
    e.preventDefault();

    this.style.border = '5px solid red';
}

uploadAreaEle.ondragleave = function (e) {
    this.style.border = '1px solid red';
}

uploadAreaEle.ondrop = function (e) {
    e.preventDefault();

    console.log(e.dataTransfer.files);

    var fileReader = new FileReader();

    fileReader.onloadstart = function () {
        console.log('开始读取图片');
    }

    fileReader.onprogress = function () {
        console.log('正在读取图片...');
    }

    fileReader.onload = function () {
        console.log('图片读取完成');

        var img = document.createElement('img');

        img.src = this.result;

        uploadAreaEle.appendChild(img);
    }

    fileReader.readAsDataURL(e.dataTransfer.files[0]);

}


