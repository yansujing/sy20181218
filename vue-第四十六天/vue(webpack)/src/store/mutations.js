
export const mutations = {
    add(state, order) {
        const index = state.orderList.indexOf(order);
        if (index === -1) {
            order.count = 1;
            state.orderList.push(order);
        } else {
            state.orderList[index].count++;
        }
    },
    del(state, index) {
        state.orderList.splice(index, 1);
    },
    decrease(state, index) {
        state.orderList[index].count--;
        if (state.orderList[index].count === 0) {
            state.orderList.splice(index, 1);
        }
    },
    increase(state, index) {
        state.orderList[index].count++;
    }
}