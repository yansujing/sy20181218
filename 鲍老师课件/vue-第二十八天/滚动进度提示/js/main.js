
const vm = new Vue({
    el: '#app',
    data: {
        windowScrollPercents: '0%'
    },
    mounted() {

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        window.addEventListener('scroll', () => {
            this.windowScrollPercents = (document.documentElement.scrollTop / height) * 100 + '%';
        });
    }
});


