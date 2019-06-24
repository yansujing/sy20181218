
import Home from '../pages/home/index.js';
import Classify from '../pages/classify/index.js';
import Shopcar from '../pages/shopcar/index.js';
import Mine from '../pages/mine/index.js';
import Login from '../pages/login/index.js';

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/classify',
        name: 'classify',
        component: Classify
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: Shopcar,
        meta: {
            required: true
        }
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    }
];