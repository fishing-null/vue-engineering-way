<template>
  <nav>
    <router-link to="/my">我的</router-link>
    <router-link to="/find">查找</router-link>
    <router-link to="/friend">朋友</router-link>
  </nav>
<!--  路由出口,其他经过路由的组件会被渲染到这个组件来-->
  <router-view/>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  nav a{
    text-decoration: none;
    color: #333;
  }
  nav a:nth-child(2){
    margin: 0 80px;
  }
  //router-link会自带两个css类名
  //router-link-exact-active  &&  router-link-active
  // 交集选择器
  nav a.router-link-exact-active {
    background: red;
    color: #fff;
  }
</style>