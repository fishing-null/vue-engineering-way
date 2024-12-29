<script setup>
  import {useStock} from "@/storage/index.js";
  const stockStore = useStock();
</script>

<template>
  <div class="sub">
    <h2>Add组件</h2>
    <p>已知库存数: {{ stockStore.stock }}</p>
    <button @click="stockStore.subStock()">库存-1</button>
  </div>
</template>

<style scoped>

</style>