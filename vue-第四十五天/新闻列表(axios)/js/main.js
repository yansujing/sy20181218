
import App from '../app/index.js';

import { router } from '../router/index.js';

import axios from '../service/axios/index.js';

Vue.prototype.$axios = axios;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');






