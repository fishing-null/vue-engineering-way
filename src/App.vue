<!-- @format -->
<script setup>
// 导入样式文件
import './assets/style.css'
import TodoHeader from "@/components/TodoHeader.vue";
import TodoFooter from "@/components/TodoFooter.vue";
import TodoMain from "@/components/TodoMain.vue";
// 导入 3 个组件

</script>

<template>
  <div class="todoapp">
    <TodoHeader/>
    <TodoMain/>
    <TodoFooter/>
  </div>
</template>

<style scoped></style>
