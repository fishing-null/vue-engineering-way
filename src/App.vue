<template>
  <div class="box">
    <h3>标题</h3>
    <button @click="onEdit">编辑</button>
  </div>
  <div v-if="ifShowEdit">
    <input type="text" ref="inputRef">
    <button>确认</button>
  </div>
</template>

<script setup>
import {nextTick, ref} from "vue";
  const inputRef = ref(null);
  const ifShowEdit = ref(false)
  // 点击编辑按钮
  const onEdit = () => {
    // 当ifShowEdit变化时，按理说input会被更新到DOM树上，但是  变化是异步的，DOM不会立马更新
    ifShowEdit.value = true
    // 这样是拿不到input元素的 此时DOM树上还没有渲染input
    // console.log(inputRef.value)

    //正确的做法
    nextTick(() => {
      console.log(inputRef.value)
      inputRef.value.focus()
    })
  }

</script>

<style lang="scss" scoped>
  .box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 200px;
  }
</style>