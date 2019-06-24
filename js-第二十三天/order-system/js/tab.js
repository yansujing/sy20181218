

$.fn.tab = function () {

    const currentIndex = Number(this.attr('data-currentindex'));

    const tabItems = this.children('.tab-header').children();

    const tabContents = this.children('.tab-content').children();

    // 根据索引切换
    function change(index) {
        for (let i = 0; i < tabItems.length; i++) {
            if (i !== index) {
                $(tabItems[i]).removeClass('is-active');
                $(tabContents[i]).removeClass('is-active');
                continue;
            }
            $(tabItems[i]).addClass('is-active');
            $(tabContents[i]).addClass('is-active');
        }
    }
    change(currentIndex);

    tabItems.click(function () {
        change($(this).index());
    });

}