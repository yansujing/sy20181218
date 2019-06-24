

var selectfileEle = document.getElementById('imgFile');

var previewContainer = document.getElementById('preview');

var fileReader = new FileReader();

var index = 0;

// 图片文件列表
var files;

// 判断是否是图片
function isImg(file) {
    if (!(file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        return false;
    }
    return true;
}

// 读取图片
function readImg(file) {
    if (index < files.length && isImg(file)) {
        console.log(index);
        fileReader.readAsDataURL(file);
    }
}

// 生成图片
function createImg(src) {
    var img = document.createElement('img');
    img.src = src;
    previewContainer.appendChild(img);
}

// 读取图片并生成预览
function readImgAndPreview() {

    index = 0;

    previewContainer.innerHTML = '';

    fileReader.onload = function () {

        index++;

        createImg(this.result);

        readImg(files[index]);
    }

    readImg(files[index]);
}

selectfileEle.onchange = function () {
    files = this.files;
    readImgAndPreview();
}