
import request from './request.js';
import response from './response.js';

axios.defaults.baseURL = 'http://www.bozedu.net:8888/';
axios.defaults.timeout = 10000;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(request.before, request.error);
axios.interceptors.response.use(response.success, response.error);

export default axios;