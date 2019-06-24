

const vm = new Vue({
    el: '#app',
    data: {
        name: '',
        list: [
            {
                id: '1',
                date: '2015-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                zipCode: '200333',
            },
            {
                id: '2',
                date: '2016-11-04',
                name: '陈晨',
                address: '苏州市平江区',
                zipCode: '100000',
            },
            {
                id: '3',
                date: '2014-06-25',
                name: '宁浩',
                address: '常州市金坛区天宇人家',
                zipCode: '100001',
            },
            {
                id: '4',
                date: '2017-05-01',
                name: '张海',
                address: '安庆市大观区',
                zipCode: '100002',
            },
            {
                id: '5',
                date: '2016-11-05',
                name: '陈王',
                address: '合肥市包河区',
                zipCode: '100003',
            },
            {
                id: '6',
                date: '2015-05-02',
                name: '王浩',
                address: '北京市昌平区',
                zipCode: '100004',
            }
        ]
    },
    methods: {
        // 姓名搜索
        search() {
            const nameReg = new RegExp(`${this.name}`);
            console.log(nameReg);
            if (this.name) {
                this.list = this.list.filter(item => {
                    return nameReg.test(item.name);
                });
            }
        }
    }
});






