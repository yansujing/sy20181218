var data = [{
    title: "标题1",
    content: [
        "111",
        "222",
        "333"
    ]
},
{
    title: "标题2",
    content: [
        "3421",
        "5543215",
        "4321",
        "3421",
        "5543215",
        "4321"
    ]
},
{
    title: "标题3",
    content: [
        "65436",
        "6543"
    ]
},
{
    title: "标题4",
    content: [
        "3421",
        "5543215",
        "4321",
        "3421",
        "5543215",
        "4321"
    ]
},
{
    title: "标题5",
    content: [
        "111",
        "222",
        "333"
    ]
},
];

data.map(function (item1, index1) {

    var div = $('<div></div>');
    div.addClass('list');

    var h3 = $('<h3></h3>');
    h3.text(item1.title);

    h3.click(function () {
        console.log($(this).next());

        console.log($(this).next().parent().siblings());

        console.log($(this).parent().find('ul > li').length);
        // 如果当前标题下的ul元素中没有li元素，就不需要执行slideToggle，直接退出函数
        if ($(this).parent().find('ul > li').length === 0) {
            return;
        }

        $(this).next().slideToggle(600).parent().siblings().children('ul').delay(400).slideUp(600);
    });

    var ul = $('<ul></ul>');

    if (index1 === 0) {
        ul.addClass('first-ul');
    }

    item1.content.map(function (item2) {
        var li = $('<li></li>');

        li.text(item2);

        var btn = $('<button>删除</button>');

        btn.click(function () {
            console.log(this);

            $(this).parent().slideUp(600, function () {
                console.log(this);
                $(this).remove();
            });
        });

        li.append(btn);

        ul.append(li);
    });

    div.append(h3);

    div.append(ul);

    $('.container').append(div);

});




