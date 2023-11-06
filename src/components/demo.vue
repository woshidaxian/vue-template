<template>
  <div>
    <!-- 可通过下面的方式将整个obj绑定 -->
    <div v-bind="$attrs"></div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  inheritAttrs: false, // 不希望组件的根元素继承 attribute（不影响style和class的合并），$attrs可手动获取并决定赋予任意元素
  components: {},
  data () {
    return {

    }
  },

  mounted() {},

  methods: {},

  // 注册局部指令
  directives: {}
}

</script>
<style lang='scss' scoped>
</style>
