<template>

  库存总数:<input type="text" v-model.number="stockStore.stock">
  <hr/>
  <Add/>
  <p>stock的两倍 = {{stockStore.doubleStock}}</p>
  <hr/>
  <Sub/>

</template>

<script setup>
  import Add from "@/components/Add.vue";
  import Sub from "@/components/Sub.vue";
  import {useStock} from "@/storage/index.js";
  const stockStore = useStock();
</script>

<style>
  #app {
    width: 350px;
    margin: 100px auto;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }

</style>