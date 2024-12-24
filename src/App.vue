<template>
  <div class="app">
    <MyProgress :width="width"/>
    <MyProgress :width="width"/>
    <MyProgress/>
    <MyProgress :width="30"/>
  </div>

</template>

<script setup>
  import {ref} from "vue";
  import MyProgress from "@/components/MyProgress.vue";

  const width = ref(50)
</script>

<style>
</style>