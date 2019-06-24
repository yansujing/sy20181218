
var appEle = document.getElementById('app');

var data = [
    { id: 1, name: '广东', pid: 0 },
    { id: 2, name: '广州', pid: 1 },
    { id: 3, name: '天河', pid: 2 },
    { id: 4, name: '白云', pid: 2 },
    { id: 5, name: '广西', pid: 0 },
    { id: 6, name: '玉林', pid: 5 },
    { id: 7, name: '北流', pid: 6 },
    { id: 8, name: '深圳', pid: 1 },
    { id: 9, name: '东莞', pid: 1 },
    { id: 10, name: '松山湖', pid: 9 }
];


var treeStr = '';


function tree(id, list) {

    for (var i = 0; i < list.length; i++) {
        if (list[i].pid === id) {

            treeStr += '<ul>';
            treeStr += '<li>' + list[i].name;
            tree(list[i].id, list);
            treeStr += '</li>';
            treeStr += '</ul>';
        }
    }

    console.log(treeStr);

    return treeStr;

}


tree(0, data);

appEle.innerHTML = treeStr;




