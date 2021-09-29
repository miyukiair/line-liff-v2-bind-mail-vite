import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "BindMail",
        component: () => import("/@/views/BindMail.vue"),
    },
    {
        path: "/validate",
        name: "Validate",
        component: () => import("/@/views/Validate.vue"),
    },
];

export default createRouter({
    history: createWebHistory('/line-liff-v2-bind-mail-vite/dist/'),
    routes,
});
