import TodoItem from '@/components/TodoItem'
import { mount, shallowMount } from '@vue/test-utils'
import { nextTick } from 'vue'

describe('TodoItem', () => {
   /** @type {import('@vue/test-utils').VueWrapper} */
  let wrapper = null
  // 运行每个测试用例之前执行 beforeEach 这个钩子函数
  beforeEach(async () => {
    wrapper = shallowMount(TodoItem, {
      // 传递 props 数据
      propsData: {
        todo: {
          id: 1,
          text: 'eat',
          done: false
        }
      }
    })
    // 确保试图更新后再进行后续的内容测试
    await nextTick()
  })

  test('任务标题展示正常', () => {
    const label = wrapper.find('[data-testid="todo-text"]')
    expect(label.text()).toBe('eat')
  })

  test('任务完成状态展示正常', () => {
    const done = wrapper.find('[data-testid="todo-done"]')
    // expect(done.element.checked).toBe(false)
    expect(done.element.checked).toBeFalsy()

    // 代码上线前，要把 data-testid 属性批量删除掉吗
    // 结合 babel 可以实现 data-testid 批量删除
    // 但是不建议 为什么？
    // 如果要做 e2e 端到端测试（模拟真实浏览器 默认用户行为 对视图进行交互 测不到代码）
    // ete 测试的就是真实的 html 页面，它也要去获取元素（生产环境也需要测试）
  })
})