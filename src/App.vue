<template>
  <div id="container">
  <!-- <HomeView/> -->
  <!-- Don't worry about routes now, we have vue router -->
  <!-- <Cart/> -->
  <router-view></router-view>
  </div>
</template>
<script setup>
import HomeView from './views/Home.vue';
// import Cart from "./components/CartComponents/cartPopup.vue"
</script>
<style scoped>
#container{
  padding-left: 2%;
  padding-right: 2%;
}
</style>