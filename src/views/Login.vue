<script setup xmlns="http://www.w3.org/1999/html">
  import {useRouter} from "vue-router";
  // 拿到了在index.js定义的路由对象
  // 通过路由对象实现页面跳转
  const router = useRouter();
  const redirectMy = ()=>{
    // 根具对应路径跳转
    router.push('/my');

    // 这两种写法是等价的
    // router.push({
    //   path:'/my',
    // });
  }
</script>

<template>
  账号:<input type="text">
  <br>
  密码:<input type="password">
  <br>
  <button @click="redirectMy">登录</button>
</template>

<style scoped lang="scss">

</style>