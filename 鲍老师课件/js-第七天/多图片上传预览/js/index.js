

var selectfileEle = document.getElementById('imgFile');

var previewContainer = document.getElementById('preview');

// 读取图片并生成预览
function readImgAndPreview(files) {

    previewContainer.innerHTML = '';

    for (var i = 0; i < files.length; i++) {

        if (!(files[i].type === 'image/jpeg' || files[i].type === 'image/png' || files[i].type === 'image/gif')) {
            continue;
        }

        var fileReader = new FileReader();

        console.log(fileReader);

        fileReader.onloadstart = function () {
            console.log('开始读取图片');
        }

        fileReader.onprogress = function () {
            console.log('正在读取图片...');
        }

        fileReader.onload = function (e) {
            console.log('图片读取完成');

            var img = document.createElement('img');

            console.log(fileReader.result);

            img.src = this.result;

            previewContainer.appendChild(img);
        }

        fileReader.readAsDataURL(files[i]);
    }

}

selectfileEle.onchange = function () {
    readImgAndPreview(this.files);
}