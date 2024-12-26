<script setup>
  import { useRoute } from "vue-router";
  // 拿到路由对象
  const route = useRoute();
</script>

<template>
  <div class="friend">
    <h3>朋友</h3>
    <h3>朋友</h3>
    <h3>朋友...</h3>
    <h3>id:{{route.query.id}}</h3>
  </div>
</template>

<style scoped lang="scss">

</style>