
import List from '../pages/list'
import Detail from '../pages/detail'

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
        path: '/detail',
        name: 'detail',
        component: Detail
    }
];