<script setup>
import {useRoute} from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="find">
    <h3>我的音乐id:{{route.params.id}}</h3>
    <h3>我的音乐</h3>
    <h3>我的音乐...</h3>
  </div>
</template>

<style scoped lang="scss">

</style>