<script setup>
  const props = defineProps({
    width: Number,
  })
</script>

<template>
  <div class="my-progress">
    <div
        class="inner"
        :style="{ width: width + '%' }"
    >
      <span> {{props.width}}%</span>
    </div>
  </div>
</template>

<style scoped>
  .my-progress {
    height: 26px;
    width: 400px;
    border-radius: 15px;
    background-color: #272425;
    border: 3px solid #272425;
    box-sizing: border-box;
    margin-bottom: 30px;
  }
  .inner {
    position: relative;
    background: #379bff;
    border-radius: 15px;
    height: 25px;
    box-sizing: border-box;
    left: -3px;
    top: -2px;
  }
  .inner span {
    position: absolute;
    right: -30px;
    top: 26px;
  }
</style>