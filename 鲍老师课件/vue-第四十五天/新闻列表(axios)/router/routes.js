
import List from '../pages/list/index.js';
import Detail from '../pages/detail/index.js';

export const routes = [
    {
        path: '/',
        redirect: '/list'
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
        props: true
    },
];