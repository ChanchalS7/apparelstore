<template>
    <div id="products">
      <!-- <h3>This is products component</h3>  -->
 <div v-for="element in products" id="individual_product">
<img :src="element.imageUrl" alt=""/>
<p>{{ element.title }}</p>
<p>{{ element.price }}</p>
</div> 
<!-- <button @click="increment()">Increment</button>
<h2>{{ count }}</h2> -->
    </div>
</template>

<script setup>
   import productsData from "../../data/prodcuts.json"
//    console.log("producsData",productsData)
import { ref, onMounted, onUpdated } from "vue";
const products = productsData
console.log("Products:",products);
// let count=ref(0);

// onMounted(()=>{
//     const div = document.getElementById("products")
//     console.log("div:",div)
// })
// onUpdated(()=>{
//     console.log("Something has changed")
// })
// const increment=()=>{
//     count.value++;
//     console.log("count:",count.value);

// }
</script>

<style scoped>
#products{
    margin-top: 3%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 3%;
    grid-gap: 3%;
}
#products img{
    width: 100%;
}

</style>