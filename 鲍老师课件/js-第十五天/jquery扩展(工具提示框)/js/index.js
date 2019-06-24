

$.fn.toolTipsToggle = function (tips) {

    console.log(this);

    // 提示框
    var sa;

    function creatEleAndSetStyle(tips, that) {
        // 这个函数中的this不是指向jquery对象，而是window对象
        console.log(this);

        var tipsText = '';

        // 样式对象
        var tipsStyle = {};

        if (tips) {
            tipsText = tips.text ? tips.text : '';
            tipsStyle.color = tips.style ? tips.style.color ? tips.style.color : "#fff" : "#fff";
            tipsStyle.backgroundColor = tips.style ? tips.style.backgroundColor ? tips.style.backgroundColor : "rgba(0, 0, 0, .7)" : "rgba(0, 0, 0, .7)";
        } else {
            console.log($(that).attr('data-color'));
            tipsText = $(that).attr('data-text');
            tipsStyle.color = $(that).attr('data-color') ? $(that).attr('data-color') : '#fff';
            tipsStyle.backgroundColor = $(that).attr('data-bgcolor') ? $(that).attr('data-bgcolor') : 'rgba(0, 0, 0, .7)';
        }

        sa = $("<span>" + tipsText + "</span>");
        sa.css({
            "display": "none",
            "position": "absolute",
            "white-space": "nowrap",
            "text-align": "center",
            "padding": "5px",
            "border-radius": "5px"
        });

        // 只有被添加进dom中的元素，它的宽度才能被获取
        var saWidth = that.append(sa).children("span").last().outerWidth();
        // 获取完宽度之后删除
        that.children("span").last().remove();

        tipsStyle.top = that.offset().top + that.outerHeight();
        tipsStyle.left = that.offset().left - (saWidth / 2 - that.outerWidth() / 2);

        sa.css({
            "top": tipsStyle.top + "px",
            "left": tipsStyle.left + "px",
            "background-color": tipsStyle.backgroundColor,
            "color": tipsStyle.color
        });
    }

    // 给当前jquery对象绑定移进移除事件
    this.hover(function () {
        console.log($(this));

        creatEleAndSetStyle(tips, $(this))

        $("body").append(sa).children("span").last().fadeIn();

    }, function () {
        $("body").children("span").last().fadeOut(function () {
            $(this).remove();
        });
    });

}

// // 调用jquery扩展
// $("#baidu").toolTipsToggle({
//     text: "百度一下，你就知道1543256435",
//     style: {
//         backgroundColor: "red",
//         color: "#000"
//     }
// });


// $("#baidu1").toolTipsToggle({
//     text: "百度一下，你就知道2",
//     style: {
//         color: "blue"
//     }
// });


// $("#baidu2").toolTipsToggle({
//     text: "百度一下，你就知道3",
//     style: {
//         backgroundColor: "red"
//     }
// });


$('[data-tool]').toolTipsToggle();