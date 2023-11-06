import Vue from 'vue'

Vue.directive('xxx', {
  bind: function( // 只调用一次，进行一次性初始化配置
    el, // DOM
    binding = {
      name: '', // 指令名称，不包括v-
      value: '', // 指令的绑定值
      oldValue: '', // 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
      expression: '', // 字符串形式的指令表达式(value)
      arg: '', // 传给指令的参数，例如v-xxx:age="18"中的age
      modifiers: '', // 一个包含修饰符的对象，例如v-xxx.a.b 则取到的对象为{a: true, b: true}
    },
    vnode,  // 虚拟节点
    oldVnode  // 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
  ){
    console.log(el, binding, vnode, oldVnode)
  },
  inserted: function(){}, // 被绑定元素插入父节点时调用，仅保证父节点存在，不保证插入到文档中
  update: function () { }, // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
  componentUpdated: function () { }, // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  unbind: function () { }, // 只调用一次，指令与元素解绑时调用。

  // 钩子之间共享数据可通过元素dataset实现
})