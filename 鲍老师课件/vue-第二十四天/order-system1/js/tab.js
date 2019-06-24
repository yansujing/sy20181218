

HTMLElement.prototype.tab = function () {
    console.log(this);

    const currentIndex = Number(this.getAttribute(('data-currentindex')));

    const tabItems = this.children[0].children;

    console.log(tabItems);

    const tabContents = this.children[1].children;

    // 根据索引切换
    function change(index) {
        for (let i = 0; i < tabItems.length; i++) {
            if (i !== index) {
                tabItems[i].className = 'fl tab-header-item';
                tabContents[i].className = 'tab-content-item';
                continue;
            }
            tabItems[i].className = 'fl tab-header-item is-active';
            tabContents[i].className = 'tab-content-item is-active';
        }
    }
    change(currentIndex);

    for (let i = 0; i < tabItems.length; i++) {
        tabItems[i].onclick = function () {
            console.log(i);
            change(i);
        }
    }
}
