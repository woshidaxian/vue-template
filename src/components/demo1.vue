<template>
  <div>
    <input type="checkbox">
  </div>
</template>

<script>
export default {
  name: '',
  // v-model 指令实际包含了v-bind:value和v-on:input两个过程，通过model选项可配置传递的prop名称和监听的事件名称
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['checked'],
  components: {},
  data () {
    return {

    }
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
