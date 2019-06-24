
export default {
    success(data) {
        return data;
    },
    error(error) {
        return Promise.reject(error);
    }
};