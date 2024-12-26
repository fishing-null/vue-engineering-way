<template>
<!--声明式导航 实现点击链接跳转-->
  <nav>
<!--    本质上是封装好的a标签 href属性指向to的链接-->
    <router-link to="/find">发现音乐</router-link>
    <router-link to="/my">我的音乐</router-link>
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
  //router-link会自带两个css样式
  //router-link-exact-active  &&  router-link-active
  // 交集选择器
  nav a.router-link-exact-active {
    background: red;
    color: #fff;
  }
</style>