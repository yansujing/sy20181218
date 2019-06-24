

// HTML5 拖放（drag、drop）

// 被拖放的元素（源目标元素）

// 1.dragstart:开始拖放
// 2.drag:正在拖放过程中
// 3.dragend:拖放结束

// 目标元素
// 1.dragenter:进入目标元素
// 2.dragover:在目标元素中移动
// 3.dragleave:离开目标元素

// 4.drop:被拖放的元素被放入目标元素


// 所有html元素都是可以拖放的

// 设置元素拖放的步骤

// 1.给被拖放的元素设置 draggable='true'
// 2.绑定事件

var dragImgEle = document.getElementById('dragImg');

dragImgEle.ondragstart = function (e) {
    console.log('ondragstart');

    console.log(e);

    // 调用 dataTransfer的setData()方法设置 需要传输的数据
    e.dataTransfer.setData('id', this.id);
}

var conEle = document.getElementsByClassName('con')[0];

conEle.ondragover = function (e) {
    e.preventDefault();

    this.style.border = '5px solid red';
}

conEle.ondragleave = function (e) {
    this.style.border = '1px solid red';
}

conEle.ondrop = function (e) {
    console.log('drop');
    console.log(e.dataTransfer.getData('id'));

    var moveImgEle = document.getElementById(e.dataTransfer.getData('id'));

    conEle.appendChild(moveImgEle);
}
