import Vue from 'vue'
import extendDemo from '@/components/demo.vue'

// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象或直接使用单文件组件
const demo = Vue.extend(extendDemo)
new demo().$mount('')

// 在下次 DOM 更新循环结束之后执行延迟回调，获取更新后的DOM
Vue.nextTick(function () {})
Vue.nextTick(()=>{})
Vue.nextTick().then(()=>{})
await Vue.nextTick()

// 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，注意对象不能是Vue实例，也不能是Vue实例的根数据对象
/**
 * target  Object|Array
 * propertyName/index   string|number
 * value any
 */
const obj = {}
const arr = []
Vue.set(obj, 'name', 'hwg')
Vue.set(arr, 0, 1)

// 删除对象属性，确保删除能触发更新视图
Vue.delete()

// 注册全局指令
Vue.directive('xxx', {})

// 注册全局过滤器
Vue.filter('xxx', function(){})

// 注册组件
Vue.component('xxx', {})

// 安装插件
Vue.use()

// 全局注册一个混入，不推荐使用
Vue.mixin()

// 将一个模版字符串编译为render函数
Vue.compile('')

// 让一个对象可响应，可以作为最小化的跨组件状态存储器
Vue.observable()

// 获取Vue当前版本号
Vue.version()