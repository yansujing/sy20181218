

const vm = new Vue({
    el: '#app',
    data: {
        page: {
            limit: 5,
            current: 1,
            total: 0,
            list: [],
        }
    },
    methods: {
        loadList(index) {
            const getList = async () => {
                const obj = {
                    method: "POST",
                    url: 'http://www.bozedu.net:8888/article/main/index',
                    async: true,
                    data: `page=${index}&limit=${this.page.limit}`,
                    dataType: 'form'
                };
                const responseData = await ajaxPromise(obj);

                console.log(JSON.parse(responseData));

                const data = JSON.parse(responseData).data;

                this.page.list = data.page_data;

                this.page.total = Math.ceil((Number(data.total_rows) / this.page.limit));
            }
            getList();
        },
        previous() {
            if (this.page.current === 1) {
                alert('最小页码！');
                return;
            }

            this.page.current--;

            this.loadList(this.page.current);
        },
        next() {
            if (this.page.current === this.page.total) {
                alert('最大页码！');
                return;
            }

            this.page.current++;

            this.loadList(this.page.current);
        }
    },
    mounted() {
        this.loadList(this.page.current);
    }
});


