import TodoHeader from '@/components/TodoHeader'
import { mount, shallowMount } from '@vue/test-utils'

// comunt 深渲染，包括所有后代组件都会被渲染
// shallowMount 浅渲染，只渲染表层组件，不包括子组件

describe('TodoHeader', () => {
  test('标题内容是 todos', () => {
    const wrapper = shallowMount(TodoHeader)
    const title = wrapper.find('[data-testid="header-title"]')
    expect(title.text()).toBe('todos')
  })

  test('添加任务，输入有效数据发布 new-todo 事件', async () => {
    const wrapper = shallowMount(TodoHeader)
    const newTodoInput = wrapper.find('[data-testid="new-todo-input"]')
    const text = 'hello'
    newTodoInput.setValue(text)
    // 触发回车事件
    await newTodoInput.trigger('keyup.enter')
    // 断言
    expect(wrapper.emitted()['new-todo']).toBeTruthy() // 对外发布了 new-todo 事件
    expect(wrapper.emitted()['new-todo'][0][0]).toBe(text) // new-todo 事件参数必须是 hello
    expect(newTodoInput.element.value).toBe('') // 发布完文本框被清空
  })

  test('添加任务，输入无效数据，不会往外发布 new-todo 事件', async () => {
    const wrapper = shallowMount(TodoHeader)
    const newTodoInput = wrapper.find('[data-testid="new-todo-input"]')
    newTodoInput.setValue('')
    // 触发回车事件
    await newTodoInput.trigger('keyup.enter')
    // 断言
    expect(wrapper.emitted()['new-todo']).toBeFalsy() // 不对外发布 new-todo 事件
  })
})