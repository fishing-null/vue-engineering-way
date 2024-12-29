<script setup>
  import {useStock} from "@/storage/index.js";
  // 获取仓库
  const stockStore = useStock();
</script>

<template>
  <div class="add">
    <h2>Add组件</h2>
    <p>已知库存数{{stockStore.stock}}</p>
    <button @click="stockStore.addStock()">库存+1</button>
  </div>
</template>

<style scoped>

</style>