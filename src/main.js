import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Component from './components'
Vue.config.productionTip = false

// 组件注册
Object.keys(Component).forEach(name=>{
  // 首字母大写
  let key = name.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`h${key}`, Component[name])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
