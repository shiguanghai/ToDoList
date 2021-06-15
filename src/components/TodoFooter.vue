<template>
  <footer class="footer" v-show="count">
    <span class="todo-count">
      <strong>{{ remainingCount }}</strong> {{ remainingCount > 1 ? 'items' : 'item' }} left
    </span>
    <ul class="filters">
      <li><a href="#/all">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="removeCompleted" v-show="count > remainingCount">
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
  name: 'TodoFooter'
}
</script>