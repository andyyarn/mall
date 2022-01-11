<template>
  <div class="container-tabar">
    <van-tabbar route>
      <van-tabbar-item
        @click="title"
        to="/home"
        icon="home-o"
      >首页</van-tabbar-item>
      <van-tabbar-item
        @click="title"
        to="/category"
        icon="apps-o"
      >分类</van-tabbar-item>
      <van-tabbar-item
        @click="title"
        to="/cart"
        icon="cart-o"
      >购物车</van-tabbar-item>
      <van-tabbar-item
        @click="title"
        to="/user"
        icon="user-circle-o"
      >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import bus from '@/eventbus.js'
export default {
  name: 'tabbar',
  methods: {
    title() {
      bus.$emit('share', this.$route.meta.name)
    }
  }
}
</script>

<style lang="less" scoped>
.container-tabar {
  padding-top: 50px;
}
</style>