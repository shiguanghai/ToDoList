<template>
  <li
    v-for="todo in filteredTodos"
    :key="todo"
    :class="{ editing: todo === editingTodo, completed: todo.completed }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="editTodo(todo)" >{{ todo.text }}</label>
      <button class="destroy" @click="remove(todo)"></button>
    </div>
    <input
      class="edit"
      type="text"
      v-editing-focus="todo === editingTodo"
      v-model="todo.text"
      @keyup.enter="doneEdit(todo)"
      @blur="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)"
    >
  </li>
</template>

<script>
export default {
  name: 'TodoItem'
}
</script>