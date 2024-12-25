<template>
  <div>
<!--    双向绑定,数据和视图会互相影响-->
    <p>{{msg}}</p>
<!--   v-model: 在输入框中输入数值,p标签中的msg也会发生变化-->
<!--    <input type="text" v-model="msg">-->
<!--    v-bind实现数据驱动视图 @input在数据变化时获取到原生DOM事件对象的值-->
    <input type="text" :value="msg" @input="msg = $event.target.value">
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  const msg = ref("")
</script>

<style lang="scss" scoped>

</style>