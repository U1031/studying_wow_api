// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueRouter from "vue-router";

import Login from './components/Login'
import Wmenu from './components/Wmenu'
import Mychar from './components/Mychar'
import Talents from './components/Talents'
import TalentsDetail from './components/TalentsDetail'


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
        name: 'Wmenu',
        component: Wmenu,
        props: true
    },
    {
        path: "/wmenu/:menuname",
        name: 'Mychar',
        component: Mychar,
        props: true
    },
    {
        path: '/test',
        name: 'Talents',
        component: Talents,
        props: true
    },
    {
        path: '/detail',
        name: 'TalentsDetail',
        component: TalentsDetail,
        props: true
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