<!-- @format -->

<script setup>
import {useTodoStore, TODO_TYPE} from '@/store/todo'

const todoStore = useTodoStore()
</script>

<template>
  <footer class="footer">
		<span class="todo-count"
    ><strong>{{ todoStore.unfinishedTodos.length }}</strong> item left</span
    >
    <ul class="filters">
      <li>
        <a
            @click="todoStore.setType(TODO_TYPE.all)"
            href="#/"
            :class="{ selected: todoStore.type === TODO_TYPE.all }"
        >All</a
        >
      </li>
      <li>
        <a
            @click="todoStore.setType(TODO_TYPE.unfinished)"
            href="#/active"
            :class="{ selected: todoStore.type === TODO_TYPE.unfinished }"
        >Active
        </a>
      </li>
      <li>
        <a
            @click="todoStore.setType(TODO_TYPE.finished)"
            href="#/completed"
            :class="{ selected: todoStore.type === TODO_TYPE.finished }"
        >Completed</a
        >
      </li>
    </ul>
    <button
        class="clear-completed"
        @click="todoStore.clearTodo()">
      Clear completed
    </button>
  </footer>
</template>
