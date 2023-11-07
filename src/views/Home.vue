<template>
  <div class="out-box" @click.self="saySomething('close')" @scroll.prevent="handleScroll">
    <div class="inner-box" @click="saySomething('open')">9</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {

    }
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},

  // keep-live
  activated() {},
  deactivated() {},

  // 捕获错误
  errorCaptured: (err, vm, info) => {
    console.log(err, vm, info)
  },

  methods: {
    saySomething(sth){
      alert(sth)
    },
    handleScroll(){
      console.log(arguments, event)
      return false
    }
  }
}

</script>
<style lang='scss' scoped>
.out-box {
  width: 310px;
  height: 300px;
  background: red;
  overflow: auto;
  .inner-box {
    width: 300px;
    height: 800px;
    background: green;
  }
}
</style>
