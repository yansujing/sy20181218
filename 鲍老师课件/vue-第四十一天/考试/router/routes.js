
import Home from '../pages/home/index.js';
import Classify from '../pages/classify/index.js';
import Shopcar from '../pages/shopcar/index.js';
import Mine from '../pages/mine/index.js';

export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/classify',
        component: Classify
    },
    {
        path: '/shopcar',
        component: Shopcar
    },
    {
        path: '/mine',
        component: Mine
    }
];