import Vue from 'vue'
import Vuex from 'vuex'
import { DEMO, GET_NAME } from './mutation-type'
import { moduleA } from './modules/demo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 使用mapState将状态混入到Vue实例的computed属性中
    list: [
      {
        id: 1,
        name: 'hwg',
        age: '25',
        country: 'China',
        flag: true
      }, {}, {}, {}, {}, {}, {}, {}
    ],
    age: 100,
    name: 'hwg',
    isMan: true,
    isWomen: false,
    phone: 'IPhone 14'
  },
  getters: {
    // 可以认为是store的计算属性，通过store.getters访问
    // ...mapGetters
    list1: state => {
      return state.list.filter(item=>item.flag)
    },
    listLen: (state, getters) => {
      return getters.list1.length
    },
    // 函数形式，可传参，结果不缓存
    getById: (state) => (id) => {
      return state.list.filter(item=> item.id == id)
    }
  },
  mutations: {
    // 官方指定唯一更改store
    // mapMutations的使用同上
    addName: (state, {name, age}) =>{
      state.name = name
      state.age = age
    },
    // 使用常量替代Mutation事件类型，便于提取全部mutation并做使用说明
    [DEMO]: (state, phone) => {
      state.phone = phone
    },
    setAge(state, age){
      state.age = age
    }
  },
  actions: {
    // Action提交的是mutation，而不是直接变更状态。可以包含异步操作
    // context 对象与 store 实例具有相同方法和属性，但不是store实例本身
    // context.state、context.getters、context.commit
    addN: (context)=> {
      context.commit('addName', '黄伟刚')
    },
    // 通过解构语法
    addAge({commit}, {age}){
      commit('setAge', age)
    },
    [GET_NAME]: ({commit}, {name, age})=>{
      return new Promise((resolve)=>{
        setTimeout(() => {
          commit('addName', {name: name, age: age})
          resolve()
        }, 1000);
      })
    }
  },
  modules: {
    demo: moduleA
  }
})
