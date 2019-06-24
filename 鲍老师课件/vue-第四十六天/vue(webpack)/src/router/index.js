
import Vue from 'vue';
// const Vue = require('vue')

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { routes } from './routes.js';

export const router = new VueRouter({
    routes
});