

const selectfileEle = document.getElementById('imgFile');

const previewContainer = document.getElementById('preview');


async function readImgAsync(file) {

    const readImg = new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onloadstart = function () {
            console.log('开始读取图片');
        }

        fileReader.onprogress = function () {
            console.log('正在读取图片...');
        }

        fileReader.onload = function (e) {
            resolve(this.result);
        }

        fileReader.onerror = function () {
            reject('读取出错');
        }

        fileReader.readAsDataURL(file);
    });

    try {
        const result = await readImg;

        const img = document.createElement('img');
        img.src = result;
        previewContainer.appendChild(img);

    } catch {
        console.log('读取错误');
    }

}

selectfileEle.onchange = function () {

    previewContainer.innerHTML = '';

    for (let i = 0; i < this.files.length; i++) {

        if (!(this.files[i].type === 'image/jpeg' || this.files[i].type === 'image/png' || this.files[i].type === 'image/gif')) {
            continue;
        }

        readImgAsync(this.files[i]);
    }

}