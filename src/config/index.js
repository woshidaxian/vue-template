import Vue from 'vue'

// Boolean[false] 取消 Vue 所有的日志与警告。 
Vue.config.silent = true

// 自定义合并策略
Vue.config.optionMergeStrategies.xxx = function(parent, child, vm) {
  console.log(parent, child, vm)
}

// Boolean[开发环境默认为true，生产环境为false] 是否允许 vue-devtools 检查代码
Vue.config.devtools = true

// 捕获错误的处理函数
Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info)
}

// 捕获警告，在开发环境下有效
Vue.config.warnHandler = function (msg, vm, trace) {
  console.log(msg, vm, trace)
  // `trace` 是组件的继承关系追踪
}

// 忽略自定义组件
Vue.config.ignoredElements = [
  'my-custom-web-component',
  'another-web-component',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ion-/
]

// 自定义键位别名
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
}

// 在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪(开发模式)
Vue.config.performance = true

// 设置为 false 以阻止 vue 在启动时生成生产提示。
if(process.env.NODE_ENV === 'production'){
  // 生产环境下设为false
  Vue.config.productionTip = false
}
