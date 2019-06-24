
import ajax from '../service/ajax/index.js';

export const actions = {
    getList({ commit }) {
        ajax({
            method: 'GET',
            url: '/shopcar(Vuex)/assets/data/list.json',
            async: true
        }).then(responseData => {
            commit('setList', JSON.parse(responseData));
        });
    }
};