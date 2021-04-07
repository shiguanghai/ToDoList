<template>
  <section id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus
        v-model="input"
        @keyup.enter="addTodo"
        >
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" v-model="allDone" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in todos"
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
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong>1</strong> item left
      </span>
      <ul class="filters">
        <li><a href="#/all">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed">
        Clear completed
      </button>
    </footer>
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
import './assets/index.css'
import { computed, ref } from 'vue'

// 1. 添加待办事项
const useAdd = todos => {
  const input = ref('')
  const addTodo = () => {
    const text = input.value  && input.value.trim()
    if (text.length === 0) return
    // 把输入的内容添加到 todos 数组
    todos.value.unshift({
      text,
      completed: false
    })
    input.value = ''
  }
  return {
    input,
    addTodo
  }
}

// 2. 删除待办事项
const useRemove = todos => {
  const remove = todo => {
    const index = todos.value.indexOf(todo)
    todos.value.splice(index, 1)
  }

  return {
    remove
  }
}

// 3. 编辑待办事项
const useEdit = remove => {
  // 记录文本框初始内容
  let beforeEditingText = ''
  // 当前编辑状态 响应式
  const editingTodo = ref(null)

  // 编辑
  const editTodo = todo => {
    beforeEditingText = todo.text
    editingTodo.value = todo
  }
  // 按下回车或者文本框失去焦点
  const doneEdit = todo => {
    if (!editingTodo.value) return
    todo.text = todo.text.trim()
    todo.text || remove(todo)
    editingTodo.value = null
  }
  // 取消编辑
  const cancelEdit = todo => {
    editingTodo.value = null
    todo.text = beforeEditingText
  }
  return {
    editingTodo,
    editTodo,
    doneEdit,
    cancelEdit
  }
}

// 4. 切换待办项完成状态
const useFilter = todos => {
  const allDone = computed({
    get () {
      // 返回 !(未完成待办事项的个数)
      return !todos.value.filter(todo => !todo.completed).length
    },
    set (value) {
      todos.value.forEach(todo => {
        todo.completed = value
      })
    }
  })

  return {
    allDone
  }
}

export default {
  name: 'App',
  setup () {
    const todos = ref([])

    const { remove } = useRemove(todos)

    return {
      todos,
      remove,
      ...useAdd(todos),
      ...useEdit(remove),
      ...useFilter(todos)
    }
  },
  directives: {
    editingFocus: (el, binding) => {
      binding.value && el.focus()
    }
  }
}
</script>

<style>
</style>
