<script setup>
import {useRoute} from "vue-router";
const route = useRoute();
</script>

<template>
  <nav>
    <router-link to="/my/recommend">推荐</router-link>
    <router-link to="/my/toplist">排行榜</router-link>
    <router-link to="/my/playlist">歌单</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped lang="scss">

</style>