// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueRouter from "vue-router";

import Login from './components/Login'
import Wmenu from './components/Wmenu'


Vue.prototype.$http = axios;
Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/login",
        component: App
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/wmenu",
        component: Wmenu
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

/* eslint-disable no-new */
new Vue({
    router,
    el: "#app",
    template: "<App/>",
    components: { App }
}).$mount('#app')