
import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

import { state } from './state.js';
import { mutations } from './mutations.js';

export const store = new Vuex.Store({
    state,
    mutations
});