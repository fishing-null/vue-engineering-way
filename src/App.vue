<template>
  <section>
    <TodoHeader @add-todo="addTodo"/>
    <TodoMain :todoList="todoList"/>
    <TodoFooter/>
  </section>
</template>

<script setup>
  import './assets/style.css'
  import TodoHeader from "@/components/TodoHeader.vue";
  import TodoMain from "@/components/TodoMain.vue";
  import TodoFooter from "@/components/TodoFooter.vue";
  import {ref} from "vue";
  const todoList = ref([
    {
      id:321,
      name: '学习Vue组件通信',
      finished: false
    },
    {
      id:127,
      name: '打游戏',
      finished: true
    },
    {
      id:666,
      name: '跑步三公里',
      finished: false
    }
  ])

  const addTodo = (name) => {
    todoList.value.push({
      id:Date.now(),
      name,
      finished: false
    })
  }
</script>
