
export default {
    getInfo(key) {
        if (!key) return;
        return localStorage.getItem(key);
    },
    setInfo(key, value) {
        if (!key) return;
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },
    removeInfo(key) {
        if (!key) return;
        localStorage.removeItem(key);
    }
};