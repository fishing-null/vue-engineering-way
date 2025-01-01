<script setup>

</script>

<template>
  <div class="fancy-button">
<!--    插槽的出口，父组件的slot content会在这里被渲染-->
    <slot>
<!--      插槽出口处的内容是默认内容，会在插槽处没有内容的时候展示-->
      <p>default content</p>
    </slot>
  </div>
</template>

<style scoped>

</style>