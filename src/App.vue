<template>
<!--  shadow属性为插槽带上阴影-->
  <el-card style="max-width: 480px" shadow="always">
<!--    header-->
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
<!--    body 默认插槽名为dafault-->
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>

<!--    footer -->
    <template #footer>Footer content</template>
  </el-card>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>