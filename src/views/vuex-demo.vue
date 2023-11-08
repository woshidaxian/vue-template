<template>
  <div></div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: '',
  components: {},
  computed: {
    // mapState等一些函数配合...扩展运算符可快速生成所需计算属性
    // 可采用对象形式，变更属性名称
    // 通过辅助函数，相关属性可直接使用this访问/调用
    ...mapState(['list']),
    ...mapGetters(['list1', 'listLen']),
    ...mapMutations(['setAge']),
    ...mapActions(['addAge'])
  },
  data () {
    return {
      
    }
  },

  mounted() {
    this.upCommit()
    this.getModuleStore()
  },

  methods: {
    upCommit(){
      // 触发mutation
      this.$store.commit('addName', {name: 'JT', age: 10})
      console.log(this.$store.state, 1)
      // 对象风格
      this.$store.commit({
        type: 'addName',
        name: 'XZQ',
        age: 40
      })
      console.log(this.$store.state, 2)
    },

    upAction(){
      // 多种形式调用
      this.addAge({age: 40})
      this.$store.dispatch({
        type: 'addAge',
        age: 30
      })
      this.$store.dispatch('addAge', {age: 30})
    },

    upAction1(){
      // 支持异步Promise、async/await
      this.$store.dispatch('GET_NAME', {name:'d', age: 9}).then(()=>{
        console.log(111111)
      })
    },
    getModuleStore(){
      console.log(this.$store.state.demo.a)
      this.$store.commit('setB')
      console.log(this.$store.state.demo.b)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
