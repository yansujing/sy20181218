
import App from '../app/index.js';

import { router } from '../router/index.js';

import { store } from '../store/index.js';

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');






