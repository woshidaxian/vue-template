const pluginDemo = {}

// eslint-disable-next-line no-unused-vars
pluginDemo.install = function(Vue, options = null){
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind() {
      // 逻辑...
    }
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function () {
    // 逻辑...
  }

  // 注册组件
  Vue.component('xxx', {
    
  })
}

export default pluginDemo