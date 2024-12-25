// index.js
import { createRouter,createWebHashHistory } from "vue-router";
import Friend from "@/views/Friend.vue";
import Find from "@/views/Find.vue";
import My from "@/views/My.vue";

// 创建路由实例
const router = createRouter({
    // 指明路由模式，当前模式为hash模式，路径后面会带有#(锚点)
    history: createWebHashHistory(),
    // 路由表规则
    routes: [
        // 指明三条切换的规则,一个规则对应一个对象
        // 每个规则都是一个路由
        {

            // 路径
            path: "/find",
            // 对应的组件
            component: Find,
        },
        {
            path: "/my",
            component: My,
        },
        {
            path: "/friend",
            component: Friend,
        },
    ]
})
export default router;