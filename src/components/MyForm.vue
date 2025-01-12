<script setup>
  //表单提供的方法
  const validate = () => {
    return Math.random() > 0.5;
  }

  //对外暴露方法
  defineExpose({
    validate,
  })
</script>

<template>
  <div class="form-box">
    <span>账号</span><input type="text"><br/>
    <span>密码</span><input type="password">
  </div>

</template>

<style scoped lang="scss">

</style>