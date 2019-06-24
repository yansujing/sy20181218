

const vm = new Vue({
    el: '#app',
    data: {
        backlog: '',
        itemSelected: '1',
        backlogList: [
            {
                title: '待办事项1',
                isFinish: false,
                isEdit: false
            },
            {
                title: '待办事项2',
                isFinish: false,
                isEdit: false
            },
            {
                title: '待办事项3',
                isFinish: true,
                isEdit: false
            }
        ],
        editValue: '',
        // 部分显示
        partShow: true,
        // 是否全部显示
        allShow: true
    },
    computed: {
        getCounts() {
            const count = {
                finishCount: 0,
                unfinishCount: 0
            };
            this.backlogList.map(item => {
                if (item.isFinish) {
                    count.finishCount++;
                } else {
                    count.unfinishCount++;
                }
            })
            return count;
        }
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
        edit(item, index) {
            this.editValue = item.title;
            this.backlogList.map(item => {
                item.isEdit = false;
            });
            this.backlogList[index].isEdit = true;
        },
        cancelEdit(index) {
            this.backlogList[index].isEdit = false;
        },
        save(item, index) {
            this.backlogList[index].isEdit = false;
            this.backlogList[index].title = this.editValue;
        },
        del(index) {
            this.backlogList.splice(index, 1);
        }
    }
});






