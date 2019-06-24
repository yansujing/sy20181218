
import Home from '../views/home'
import Classify from '../views/classify'
import Shopcar from '../views/shopcar'
import Mine from '../views/mine'

import Login from '../views/login'
import Register from '../views/register'
import Developing from '../views/developing'
import Search from '../views/search'
import ProductDetail from '../views/productDetail'

// 路由懒加载
// const Home = () => import('../views/home')
// const Classify = () => import('../views/classify')
// const Shopcar = () => import('../views/shopcar')
// const Mine = () => import('../views/mine')

// const Login = () => import('../views/login')
// const Register = () => import('../views/register')
// const Developing = () => import('../views/developing')
// const Search = () => import('../views/search')
// const ProductDetail = () => import('../views/productDetail')

const routes = [
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
            requireLogin: true
        }
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/developing',
        name: 'developing',
        component: Developing
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/productDetail/:id',
        name: 'productDetail',
        component: ProductDetail
    }
]

export default routes