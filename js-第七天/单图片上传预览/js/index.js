

var selectfileEle = document.getElementById('imgFile');

var previewContainer = document.getElementById('preview');

selectfileEle.onchange = function () {


    console.log(this.files);

    if (!(this.files[0].type === 'image/jpeg' || this.files[0].type === 'image/png' || this.files[0].type === 'image/gif')) {
        alert('不是有效的图片文件！！！');

        return;
    }

    var fileReader = new FileReader();

    fileReader.onloadstart = function () {
        console.log('开始读取图片');
    }

    fileReader.onprogress = function () {
        console.log('正在读取图片...');
    }

    fileReader.onload = function () {
        console.log('图片读取完成');

        previewContainer.innerHTML = '';

        var img = document.createElement('img');

        img.src = fileReader.result;

        previewContainer.appendChild(img);
    }

    fileReader.readAsDataURL(this.files[0]);

}