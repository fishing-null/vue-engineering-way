<script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();
</script>

<template>
  <div class="my">
    <h3>发现音乐</h3>
    <h3>发现音乐</h3>
    <h3>发现音乐...</h3>
<!--    存储在route对象中的params数组中-->
    <h3>fid:{{route.params.fid}}</h3>
    <h3>pid:{{route.params.pid}}</h3>
  </div>
</template>

<style scoped lang="scss">

</style>