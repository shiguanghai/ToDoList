import TodoApp from '@/components/TodoApp'
import { mount, shallowMount } from '@vue/test-utils'
import { nextTick } from 'vue'

describe('TodoApp', () => {
   /** @type {import('@vue/test-utils').VueWrapper} */
  let wrapper = null
  // 运行每个测试用例之前执行 beforeEach 这个钩子函数
  beforeEach(async () => {
    wrapper = shallowMount(TodoApp)
    wrapper.vm.todos = [
      { id: 1, text: 'eat', done: false },
      { id: 2, text: 'sleep', done: true },
      { id: 3, text: 'play', done: false }
    ]
    // 确保试图更新后再进行后续的内容测试
    await nextTick()
  })
  it('任务列表展示正常', () => {
    const todoItems = wrapper.findAll('[data-testid="todo-item"]')
    expect(todoItems.length).toBe(3)
  })
})