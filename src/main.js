import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Component from './components'
Vue.config.productionTip = false

// 组件注册1
Object.keys(Component).forEach(name=>{
  // 首字母大写
  let key = name.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`h${key}`, Component[name])
})
// 组件注册2
// const ctx = require.context('./components', false, /\.vue$/)
// console.log(ctx.keys().map(ctx))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
