<script setup>
  import {ref} from "vue";
  //是否处于编辑状态
  const isEdit = ref(false)
  const model = defineModel()
  const onDblClick = () => {
    isEdit.value = true
  }
  //敲回车保存内容
  const onEnter = (e) => {
    // 获取原生事件对象
    const tagName =   e.target.value.trim()
    if (tagName) {
      model.value = tagName
    }
    isEdit.value = false
  }
</script>

<template>
  <div class="my-tag">
    <input v-focus v-if="isEdit" :value="model" class="input" type="text" placeholder="输入标签" @blur="isEdit = false" @keydown.enter="onEnter"/>
    <div v-else class="text" @dblclick="onDblClick">{{model}}</div>
  </div>
</template>

<style lang="scss" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>