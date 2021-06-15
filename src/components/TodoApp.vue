<template>
  <section id="app" class="todoapp">
    <TodoHeader />
    <section class="main" v-show="count">
      <input id="toggle-all" class="toggle-all" v-model="allDone" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <TodoItem />
      </ul>
    </section>
    <TodoFooter />
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <!-- Remove the below line ↓ -->
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Created by <a href="https://shiguanghai.top">shiguanghai</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script>
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'

export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoItem
  }
}
</script>