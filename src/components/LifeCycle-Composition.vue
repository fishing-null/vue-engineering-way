<script setup>
import {onUnmounted, ref} from "vue";
const count = ref(0)
//创建时钩子
const timerId = setInterval(()=>{
  console.log('LifeCycle Composition loaded');
},1000)

//卸载时钩子
onUnmounted(()=>{
  console.log('LifeCycle Composition unmounted');
  clearInterval(timerId);
})
</script>

<template>
  <div>
    <p>{{count}}</p>
  </div>
</template>

<style scoped lang="scss">

</style>