<template>
  <div class="container-Carousel-chart">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="item in bannerList"
        :key="item.id"
      >
        <img
          :src="item.image"
          alt=""
        >
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Carouselchart',
  props: {
    bannerList: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
.container-Carousel-chart {
  padding-top: 46px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 215.27px;
  background-color: #39a9ed;
  img {
    width: 100%;
  }
}
</style>
