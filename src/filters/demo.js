import Vue from 'vue'

// 注册全局过滤器，注意v3已去除过滤器
Vue.filter('xxx', function(val){
  console.log(val)
})