
const vm = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        fn() {
            this.count++;
        }
    }
});