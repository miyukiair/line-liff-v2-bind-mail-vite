import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("/@/components/BindMail.vue"),
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
