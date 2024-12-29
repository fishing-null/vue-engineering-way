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
        {
            path: "/",
            redirect: "/login",
        },
        // 指明三条切换的规则,一个规则对应一个对象
        // 每个规则都是一个路由
        {
            // 路径
            path: "/find",
            // 对应的组件
            component: Find,
        },
        {
            // 动态传参
            path: "/my",
            name: "My",
            component: My,
            children:[
                {
                    path: "toplist",
                    component: () => import("@/views/TopList.vue")
                },
                {
                    path: "recommend",
                    component: () => import("@/views/Recommend.vue")
                },
                {
                    path: "playlist",
                    component: () => import("@/views/PlayList.vue")
                },
            ]
        },
        {
            path: "/friend",
            component: Friend,
        },
        {
            path: "/login",
            component: () => import("@/views/Login.vue"),
        }
    ]
})

// 通过这个变量模拟用户是否登陆
const isLogin = false

// 向router中传入一个回调函数，当回调函数返回值为true时才能正常跳转
// 回调函数中 to是要跳转的页面的路由对象，from是要从哪个页面跳转对应的路由对象
router.beforeEach((to, from) => {
    if (!isLogin && to.path === "/my") {
        // 不放行
        alert('请先登陆')
        return false
    }else {
        // 放行
        return true
    }
})
export default router;