<script setup>
  import {useRouter} from "vue-router";
  import {ref} from "vue";
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
  };
  const editData = ref({
    password: "",
    account:""
  })
</script>

<template>
  <div>
    <span>账号</span>
    <el-input v-model="editData.account" style="width: 240px"></el-input>
  </div>
  <div>
    <span>密码</span>
    <el-input v-model="editData.password" style="width: 240px" type="password" show-password></el-input>
  </div>
  <el-button type="primary" @click="redirectMy">登录</el-button>
</template>

<style scoped lang="scss">

</style>