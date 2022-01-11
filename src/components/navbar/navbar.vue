<template>
  <div class="container-navbar">
    <van-nav-bar :title="title" />
  </div>
</template>
<script>
import bus from '@/eventbus.js'
export default {
  name: 'navbar',
  data() {
    return {
      title: '首页'
    }
  },
  created() {
    bus.$on('share', val => {
      this.title = val
    })
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  position: fixed;
  width: 100%;
}
</style>