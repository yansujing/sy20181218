
import axios from 'axios'

axios.defaults.baseURL = '/data/';
axios.defaults.timeout = 20000;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

import './request'
import './response'

export default axios