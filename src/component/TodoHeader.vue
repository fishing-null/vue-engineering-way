<!-- @format -->

<script setup>
import { useTodoStore } from '@/store/todo'
const todoStore = useTodoStore()
// 回车按键添加
const onEnter = (e) => {
  // 获取输入框的值，并去除首尾空格
  const text = e.target.value.trim()
  // 非空校验
  if (!text) return alert('任务名称不能为空')
  // 调用添加方法
  todoStore.addTodo(text)
  // 清空输入框
  e.target.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input
        @keydown.enter="onEnter"
        class="new-todo"
        placeholder="What needs to be finished?"
        autofocus />
  </header>
</template>
