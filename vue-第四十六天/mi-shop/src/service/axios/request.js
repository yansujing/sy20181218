
import axios from 'axios'
import store from '../../store'

// import router from '../../router'

// let cancelReq;

// let redirect = {
//     name: ''
// }

window.cancel = [];

axios.interceptors.request.use(
    config => {
        console.log(config);
        config.cancelToken = new axios.CancelToken(c => {
            // cancelReq = c;
            window.cancel.push(c);
        });

        // let token = store.state.token;
        // if (token === null) {
        //     cancelReq();

        //     if (router.history.current.name !== 'login') {
        //         redirect.name = router.history.current.name;
        //         if (router.history.current.params) {
        //             redirect.id = router.history.current.params.id
        //         }
        //     }
        //     router.replace({ name: 'login', query: { redirect } });
        // } else {
        //     config.headers['Token'] = token;
        // }

        console.log(store.state.token);
        config.headers['Token'] = store.state.token;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);