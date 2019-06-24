

var selectfileEle = document.getElementById('imgFile');

var previewContainer = document.getElementById('preview');

var fileReader = new FileReader();

var index = 0;

// 读取图片并生成预览
function readImgAndPreview(files) {

    index = 0;

    previewContainer.innerHTML = '';

    fileReader.onload = function () {

        index++;

        var img = document.createElement('img');
        img.src = this.result;
        previewContainer.appendChild(img);

        if (index < files.length) {
            console.log(index);
            fileReader.readAsDataURL(files[index]);
        }
    }

    fileReader.readAsDataURL(files[index]);

}

selectfileEle.onchange = function () {
    readImgAndPreview(this.files);
}