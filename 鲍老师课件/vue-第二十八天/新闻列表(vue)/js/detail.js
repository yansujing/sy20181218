

const vm = new Vue({
    el: '#app',
    data: {
        content: ''
    },
    methods: {
        loadDetail(id) {
            const getList = async () => {
                const obj = {
                    method: "GET",
                    url: `http://www.bozedu.net:8888/article/main/detail`,
                    async: true,
                    data: `id=${id}`
                }
                const responseData = await ajaxPromise(obj);

                const data = JSON.parse(responseData).data;

                this.content = data.content;
            }
            getList();
        }
    },
    mounted() {
        console.log(location.search);
        const id = location.search.split('?')[1];
        console.log(id);
        this.loadDetail(id);
    }
})