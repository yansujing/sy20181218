
import App from '../app/index.js';

import { router } from '../router/index.js';

const vm = new Vue({
    render: h => h(App),
    router
}).$mount('#app');