<script setup>
  import {computed} from "vue";

  const props = defineProps({
      todoList:{
        type:Array,
        default:()=>{}
      }
    })

  const emit = defineEmits({})

  const unFinishedLength = computed(() => {
    return props.todoList.filter((item) => {
      return item.finished === false;
    }).length;
  })

</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{unFinishedLength}}</strong> item left</span>
    <ul class="filters">
      <li>
        <a href="#/" class="selected">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="emit('clear-todo')">
      Clear Completed
    </button>
  </footer>
</template>
