
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia} from "pinia";


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
// 实现一个自定义指令来实现聚焦
app.directive('focus',{
    mounted(el){
        //自定义指令的本质就是在内部做DOM操作
        el.focus()
    }
})
app.mount('#app')
