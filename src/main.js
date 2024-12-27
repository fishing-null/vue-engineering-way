
import { createApp } from 'vue'
// 导入两个相关函数
import App from './App.vue'
import router from "@/route/index.js";


// 注册路由实例,让路由规则生效
const app = createApp(App);
app.use(router)
app.mount('#app')

