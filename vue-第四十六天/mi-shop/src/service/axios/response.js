
import axios from 'axios'

// import router from '../../router'

axios.interceptors.response.use(
    data => {
        return data;
    },
    error => {
        // if (error.response) {
        //     switch (error.response.status) {
        //         case 400:
        //             console.log('请求无效！！');
        //             break;
        //         case 401:
        //             console.log('会话已失效，请重新登录！！');
        //             router.replace({ name: 'login', query: { redirect: router.history.current.name } });
        //             break;
        //         case 402:
        //             console.log('登录超时！！');
        //             break;
        //     }
        // }
        return Promise.reject(error);
    }
);