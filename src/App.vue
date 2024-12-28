<template>
  <nav>
    <router-link to="/my">我的</router-link>
    <router-link to="/find">发现音乐</router-link>
    <router-link to="/friend">朋友</router-link>
  </nav>
<!--  路由出口,其他经过路由的组件会被渲染到这个组件来-->
  <router-view/>
</template>

<script setup>

</script>

<style>
 nav a {
   color: #333;
   text-decoration: none;
 }

 nav a:nth-child(2){
   margin: 0 80px;
 }

 nav a.router-link-active {
   background: red;
   color: white;
 }
</style>