

export default {
    before(config) {
        return config;
    },
    error(error) {
        return Promise.reject(error);
    }
};