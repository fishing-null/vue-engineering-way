<!-- @format -->

<script setup>
import { computed } from 'vue'
// 导入 useTodoStore 函数
import { useTodoStore } from '@/store/todo'
// 获取仓库
const todoStore = useTodoStore()

// 计算属性：小选和全选
const isAllSelected = computed({
  // 获取自动触发，必须有返回值
  get() {
    return todoStore.isAll
  },
  // 赋值自动触发，接收要赋予的新值
  set(flag) {
    todoStore.toggleTodo(flag)
  }
})
</script>

<template>
  <section class="main">
    <input
        v-model="isAllSelected"
        id="toggle-all"
        class="toggle-all"
        type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
          v-for="(item, index) in todoStore.showTodos"
          :key="item.id"
          :class="{ completed: item.finished }">
        <div class="view">
          <input
              v-model="item.finished"
              class="toggle"
              type="checkbox" />
          <label>{{ item.text }}</label>
          <button
              class="destroy"
              @click="todoStore.delTodo(index)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
