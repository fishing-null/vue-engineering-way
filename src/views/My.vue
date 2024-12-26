<script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();
</script>

<template>
  <div class="find">
    <h3>我的音乐</h3>
    <h3>我的音乐</h3>
    <h3>我的音乐...</h3>
    <h3>id:{{route.query.id}}</h3>
    <h3>music:{{route.query.music}}</h3>
  </div>
</template>

<style scoped lang="scss">

</style>