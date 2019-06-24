
export const getters = {
    getTotal(state) {
        let count = 0;
        state.list.map(item => {
            count += item.count;
        });
        return count;
    },
    getChecked(state) {
        let count = 0;
        state.list.map(item => {
            if (item.checked) {
                count += item.count;
            }
        });
        return count;
    },
    getPrice(state) {
        let price = 0;
        state.list.map(item => {
            if (item.checked) {
                price += item.price * item.count;
            }
        });
        return price;
    }
};