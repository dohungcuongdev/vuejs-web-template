import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import SecondPage from './views/SecondPage.vue';
import { NAVIGATION_LINKS } from "./const";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/' + NAVIGATION_LINKS[0].link },
        { path: '/' + NAVIGATION_LINKS[0].link, component: Home },
        { path: '/' + NAVIGATION_LINKS[1].link, component: SecondPage },
    ]
});
