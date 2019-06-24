

var list = [
    {
        text: '待办事项1',
        checked: false
    },
    {
        text: '待办事项2',
        checked: true
    },
    {
        text: '待办事项3',
        checked: false
    },
    {
        text: '待办事项4',
        checked: true
    },
    {
        text: '待办事项5',
        checked: false
    }
];


var str = '  123  ';

console.log(str);

console.log(str.replace(/(^\s*)|(\s*$)/g, ''));

// trim

console.log(str.trim());

var str1 = '   bao';

console.log(str1.trim());

// str ---> String.protopyte ---> Object.protopyte ---> null

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
}

console.log('   Steel  '.trim());

function render() {

}

document.getElementById('select').onchange = function () {
    console.log(this.value);

    if (this.value === '1') {
        render(list);

        render(list);
    }

    if (this.value === '2') {


        var list = list.filter(function (item) {
            return item.checked;
        });

        render(list);
    }

    if (this.value === '3') {

        var list = list.filter(function (item) {
            return !item.checked;
        });

        render(list);
    }
}

console.log(list.filter(function (item) {
    return !item.checked;
}));

console.log(list);