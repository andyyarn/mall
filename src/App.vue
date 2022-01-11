<template>
  <div id="app">
    <navbar />
    <router-view />
    <tabbar />
  </div>
</template>
<script>
import Tabbar from '@/components/tabbar/tabbar.vue'
import Navbar from '@/components/navbar/navbar.vue'
export default {
  components: {
    Tabbar,
    Navbar
  }
}
</script>

<style>
@import 'assets/css/normalize.css';
</style>
