

const vm = new Vue({
    el: '#app',
    data: {
        backlog: '',
        itemSelected: '1',
        backlogList: [
            {
                title: '待办事项1',
                isFinish: false
            },
            {
                title: '待办事项2',
                isFinish: false
            },
            {
                title: '待办事项3',
                isFinish: true
            }
        ],
        // 部分显示
        partShow: true,
        // 是否全部显示
        allShow: true
    },
    watch: {
        itemSelected() {
            if (this.itemSelected === '1') {
                this.allShow = true;
            }
            if (this.itemSelected === '2') {
                this.allShow = false;
                this.partShow = true;
            }
            if (this.itemSelected === '3') {
                this.allShow = false;
                this.partShow = false;
            }
        }
    },
    methods: {
        add() {
            console.log(this.backlog);
            this.backlogList.push({
                title: this.backlog,
                isFinish: false
            });
            this.backlog = '';
        },
        del(index) {
            this.backlogList.splice(index, 1);
        }
    }
});






