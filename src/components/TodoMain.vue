<script setup>
  const props = defineProps({
    todoList:{
      type:Array,
      default(){}
    }
  })
  const emit = defineEmits({})
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="(item,index) in props.todoList"
      :key="item.id"
      :class="{ completed: item.finished }">
        <div class="view">
          <input class="toggle"
                 type="checkbox"
                 v-model="item.finished"
          />
          <label>{{item.name}}</label>
          <button class="destroy" @click="emit('delete-todo',index)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
