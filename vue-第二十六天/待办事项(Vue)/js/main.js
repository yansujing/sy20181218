

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
        list: []
    },
    computed: {
        getBacklogList() {
            console.log(this.itemSelected);
            if (this.itemSelected === '1') {
                return this.backlogList;
            }

            if (this.itemSelected === '2') {
                return this.backlogList.filter(item => item.isFinish);
            }

            if (this.itemSelected === '3') {
                return this.backlogList.filter(item => !item.isFinish);
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
            console.log(index);
            this.getBacklogList.splice(index, 1);
        }
    }
});






