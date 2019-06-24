

var h3Ele = $('.list > h3');

h3Ele.click(function () {
    if ($(this).next('.list-ul').children().length > 0) {
        $(this).next('.list-ul').slideToggle(600).parent().siblings().children('.list-ul').delay(400).slideUp();
    }

});

var delBtnsEle = $('.list-ul > li > button');

delBtnsEle.click(function () {
    $(this).parent().slideUp(400, function () {
        $(this).remove();
    })
})


