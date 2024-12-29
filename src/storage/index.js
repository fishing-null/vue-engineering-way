import {defineStore} from "pinia";
import {computed, ref} from "vue";

// 定义仓库
// 函数传参 类似组合式API

export const useStock = defineStore('stock',() => {
    const stock = ref(20)

    // 设置stock
    function setStock(value) {
        stock.value = value
    }

    function addStock() {
        stock.value++
    }

    function subStock() {
        stock.value--
    }

    // 计算属性 基于已有的数据 再不改变原数据的前提下 展示一个新的数据
    // 通常适用于前端需要展示内容与后端逻辑处理内容不一致的情况
    const doubleStock = computed(() => {
        return stock.value*2
    })



    // 返回了一个对象 组件可以共享对象中的数据和函数
    return {
        stock, doubleStock, addStock, subStock
    }
})