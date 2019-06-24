
import storage from '../service/storage/index.js';

import { routes } from './routes.js';

export const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.required && !storage.getInfo('token')) {
        next({ name: 'login', query: { redirect: to.name } });
    } else {
        next();
    }
});