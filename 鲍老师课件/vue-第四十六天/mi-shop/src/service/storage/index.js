
export default {
    getInfo(key) {
        if (!key) return
        return JSON.parse(window.localStorage.getItem(key));
    },
    setInfo(key, value) {
        if (!key) return
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    },
    removeInfo(key) {
        if (!key) return
        window.localStorage.removeItem(key);
    }
}