
import News from '../pages/news/index.js';
import Detail from '../pages/detail/index.js';

export const routes = [
    {
        path: '/',
        component: News
    },
    {
        path: '/detail/:id',
        component: Detail
    }
];