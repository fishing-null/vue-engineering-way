
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia} from "pinia";
//导入Element-Plus组件库
import ElementPlus from "element-plus";
//导入样式
import 'element-plus/dist/index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
//注册 这里是全局注册，注册了之后所有的vue文件中都可以使用
app.use(ElementPlus)
app.mount('#app')
