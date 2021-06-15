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
})