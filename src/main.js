// main.js
import { createApp } from 'vue'
// 导入两个相关函数
import router from "./router";
import App from './App.vue'
import ElementPlus from 'element-plus'

// 注册路由实例,让路由规则生效
const app = createApp(App);
app.use(router)
app.mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
