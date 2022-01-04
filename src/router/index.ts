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
        component: () => import(/* webpackChunkName: "HistoryView" */ "../views/History.vue"),
        children: [
            {
                path: "add",
                meta: {
                    historyAction: 'add'
                }
            },
            {
                path: "remove",
                meta: {
                    historyAction: 'remove'
                }
            }
        ]
    }
];

export default new VueRouter({
    mode: "history",
    routes
})