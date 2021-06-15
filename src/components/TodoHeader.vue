<template>
  <header class="header">
    <h1 data-testid="header-title">todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autocomplete="off"
      autofocus
      v-model="input"
      @keyup.enter="addTodo"
      >
  </header>
</template>

<script>
export default {
  name: 'TodoHeader'
}
</script>