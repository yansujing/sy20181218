

var list = [
    {
        id: '1',
        text: '待办事项1',
        checked: false,
        isEdit: false
    },
    {
        id: '2',
        text: '待办事项2',
        checked: true,
        isEdit: true
    },
    {
        id: '3',
        text: '待办事项3',
        checked: false,
        isEdit: false
    },
    {
        id: '4',
        text: '待办事项4',
        checked: true,
        isEdit: false
    },
    {
        id: '5',
        text: '待办事项5',
        checked: false,
        isEdit: false
    }
];

// 根据id返回索引
function getIndexById(id, arr) {

    var selectIndex = -1;

    arr.map(function (item, index) {
        if (id === item.id) {
            selectIndex = index;
        }
    });

    return selectIndex;

}

// 绑定事件
function bindEvent() {
    $('.blog-checkbox').change(function () {

        var id = $(this).parent().parent().attr('data-id');

        var index = getIndexById(id, list);

        if (index !== -1) {
            list[index].checked = !list[index].checked;
        }

        render(list);

    });
}

// 渲染DOM
function render(list) {
    $('.descul').html('');
    list.map(function (item) {
        var li = $('<li data-id=' + item.id + '></li>');
        var span = $('<span class="span1">' + item.text + '</span>');
        span.css('display', !item.isEdit ? 'inline' : 'none');

        var blogInput = $('<input type="text" class="edit-input" value=' + item.text + ' />');
        blogInput.css('display', item.isEdit ? 'inline-block' : 'none');
        var blogCheckbox = $('<input type="checkbox" class="blog-checkbox" />');
        blogCheckbox.attr('checked', item.checked);
        var blogLabel = $('<label></label>');
        blogLabel.text(item.checked ? '已完成' : '未完成');
        blogLabel.attr('class', item.checked ? 'finished' : 'unfinished');
        blogLabel.append(blogCheckbox);

        var deleteBtn = $('<button class="delete">删除</button>');
        var p = $('<p class="fr"></p>');
        p.css('display', item.isEdit ? 'inline-block' : 'none');
        var saveBtn = $('<button class="edit" class="save">保存</button>');
        var cancelBtn = $('<button class="edit" class="cancel-edit">取消编辑</button>');
        p.append(saveBtn);
        p.append(cancelBtn);

        var editBtn = $('<button class="edit" class="edit">编辑</button>');
        editBtn.css('display', !item.isEdit ? 'inline-block' : 'none');

        li.append(span);
        li.append(blogInput);
        li.append(blogLabel);
        li.append(deleteBtn);
        li.append(p);
        li.append(editBtn);

        $('.descul').append(li);
    });

    bindEvent();
}
render(list);
