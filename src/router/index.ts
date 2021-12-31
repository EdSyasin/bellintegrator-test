import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        name: "Name",
        path: "/",
        component: () => import(/* webpackChunkName: "HomeView" */ "../views/Home.vue")
    },
    {
        name: "History",
        path: "/history",
        component: () => import(/* webpackChunkName: "HistoryView" */ "../views/History.vue")
    }
];

export default new VueRouter({
    mode: "history",
    routes
})