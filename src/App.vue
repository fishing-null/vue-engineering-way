<template>
  <!--  通过ref标签获取元素DOM属性到一个响应式变量中-->
  <div ref="divRef">Some Text...</div>
  <MyChart></MyChart>
  <div class="login-box">
    <MyForm ref="formRef"></MyForm>
    <button>登陆</button>
  </div>


</template>

<script setup>
import {onMounted, ref} from "vue";
import MyChart from "@/components/MyChart.vue";
import MyForm from "@/components/MyForm.vue";
const divRef = ref(null)
const formRef = ref(null)
// 在挂载阶段拿到原生DOM元素
onMounted(()=>{
  // 拿取到元素的div元素，进行原生dom操作
  console.log(divRef.value)
  divRef.value.style.color = "red"
  // 调用组件提供的方法
  console.log(formRef.value.validate())
})

</script>

<style lang="scss" scoped>

</style>