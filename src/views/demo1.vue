<template>
  <div>
    <!-- class还可绑定数据对象，计算属性，方法 -->
    <div :class="{active: flag1, 'text-danger': flag2}">{{ val1 }}</div>
    <div :class="[class1, class2, 'class3']"></div>
    <div :style="{color: 'red'}"></div>
    <!-- 使用template标签包裹需要批量条件渲染的元素，注意v-show不支持这种写法 -->
    <template v-if="true">
      <div></div>
      <div></div>
      <div></div>
    </template>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      val1: '',
      val2: '',
      flag1: false,
      flag2: true,
      class1: '',
      class2: '',
    }
  },

  // 计算属性
  computed: {
    val3: function () {
      return '1'
    }
  },

  mounted() {},

  methods: {},

  // 侦听器
  watch: {
    val1: {
      handler(){

      },
      // handler: function(){},
      deep: true, // 深度监听，监听对象内部时需要，监听数组时不需要
      immediate: true, // 立即执行
    },
    val2: function(){

    }
  }
}

</script>
<style lang='scss' scoped>
</style>
