<script setup>

</script>

<template>
<!--  具名插槽可以使组件包含多个插槽出口，并通过插槽的名字来区分出口-->
  <div class="container">
    <header>
<!--      标题内容-->
      <slot name="header"></slot>
    </header>

    <main>
<!--      主要内容-->
      <slot></slot>
    </main>

    <footer>
<!--      底部内容-->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped lang="scss">

</style>