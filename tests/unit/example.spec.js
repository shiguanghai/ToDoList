// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

// import { sum } from '@/utils/cal'
import Gretting from '@/components/Gretting'
import { createApp } from 'vue'

// it
// test('first test', () => {
//   expect(sum(1, 2)).toBe(3)
// })

test('Gretting', () => {
  // 你可以想象这里有个空页面
  // 测试环境有一个虚拟的 DOM 环境
  // 内部用的 jsdom 来模拟浏览器 DOM
  const root = document.createElement('div')
  root.id = 'app'
  document.body.appendChild(root)

  // 把 Vue 组件渲染到 HTML 元素节点上
  createApp(Gretting).mount('#app')

  // console.log(document.body.innerHTML)
  const title = document.querySelector('h1')
  expect(title.innerHTML).toBe('Hello World')
})
