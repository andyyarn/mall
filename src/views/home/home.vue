<template>
  <div class="container-home">
    <Carouselchart :bannerList="bannerList"></Carouselchart>
  </div>
</template>

<script>
import Carouselchart from '@/views/swipe/Carousel chart.vue'
import { getHomeDataAPI } from '@/network/apis/home.js'
export default {
  name: 'home',
  data() {
    return {
      data: '',
      bannerList: [],
      recommendList: []
    }
  },
  components: {
    Carouselchart
  },
  methods: {
    async getData() {
      const res = await getHomeDataAPI()
      if (res.status == 200) {
        this.bannerList = res.data.data.banner.list
        this.recommendList = res.data.data.recommend.list
      }
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style>
</style>