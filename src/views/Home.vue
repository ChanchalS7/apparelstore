<template>
    <div>
<NavbarComponent/>
<BannerComponent welcomemsg="Welcome to Vue Shop"/>
<ProductsComponent/>
    </div>
</template>

<script setup>
   import NavbarComponent from '../components/HomePageComponents/Navbar.vue';
   import BannerComponent from '../components/HomePageComponents/Banner.vue';
   import ProductsComponent from '../components/HomePageComponents/Products.vue'
</script>

<style scoped>

</style>