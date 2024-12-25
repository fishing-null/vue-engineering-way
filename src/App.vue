<template>
  <section>
    <TodoHeader @add-todo="addTodo"/>
    <TodoMain :todoList="todoList"
              @delete-todo="deleteTodo"
    />
    <TodoFooter :todoList="todoList"
                @clear-todo="clearTodo"
    />
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

  const deleteTodo = (idx) => {
    if(window.confirm("确认删除么?")){
      todoList.value.splice(idx,1);
    }
  }
  const clearTodo = () => {
    todoList.value = todoList.value.filter(item => !item.finished)
  }
</script>
<style scoped></style>