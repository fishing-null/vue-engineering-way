<script setup>
  import {ref} from "vue";
  // 收集输入框的值
  const title = ref('')
  const emit = defineEmits()
  const onEnter = () => {
    if (!title.value) return alert("任务名称不能为空!")
    emit('add-todo', title.value)
    title.value = ''
  }
</script>

<template>
  <header class="header">
    <h1>Notepad</h1>
    <input class="new-todo"
           @keydown.enter="onEnter"
           v-model="title"
           placeholder="What needs to be finished?"
           autofocus>
  </header>
</template>
