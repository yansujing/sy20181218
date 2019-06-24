
export const mutations = {
    setList(state, data) {
        state.list = data;
    },
    del(state, item) {
        const index = state.list.indexOf(item);
        state.list.splice(index, 1);
    },
    decrease(state, item) {
        if (item.count !== 1) {
            item.count--;
        }
    },
    increase(state, item) {
        item.count++;
    }
};