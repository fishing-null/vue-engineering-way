import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            // 重定向 '/' 到 '/find'
            redirect: "/find",
        },
        {
            path: "/find",
            component: () => import("@/views/Find.vue"),
        },{
            path: "/my",
            component: () => import("@/views/My.vue"),
        },{
            path: "/friend",
            component: () => import("@/views/Friend.vue"),
        },{
            // 404规则
            path: "/:pahMatch(.*)*",
            component: () => import("@/views/404.vue"),
        }
    ]
});
export default router;