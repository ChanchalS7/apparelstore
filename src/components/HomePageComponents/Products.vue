<template>
    <div id="products">
      <!-- <h3>This is products component</h3>  -->
 <!-- <div v-for="item in Products" :key="item" id="individual_product">
<img :src="item.image" alt=""/>
<p>{{ item.title }}</p>
<p>{{ item.price }}</p>
</div>  -->
<div v-for="product in products" id="individual_product">
    <img :src="product.imageUrl" alt=""/>
    <p>{{product.title}}</p>
    <p>{{product.price}}</p>
</div>
<!-- <button @click="increment()">Increment</button>
<h2>{{ count }}</h2> -->
    </div>
</template>

<script setup>
import {ref} from "vue";
import {db,collection,getDocs} from "../../firebase.js";
const products = ref([]);
//reading firestore data
const result = await getDocs(collection(db,"vuestore"));
result.forEach((doc)=>{
    let product = doc.data();
    product.id=doc.id;
    console.log("product:",product);
    //doct.data() is never undefined for query doc snapshot
})
console.log("Products:",products.value)
//    import productsData from "../../data/prodcuts.json"
//    console.log("producsData",productsData)
// import { ref, onMounted, onUpdated } from "vue";
// // import axios from "axios";
// import {db,collection,getDocs} from "../../firebase.js"
// import { getDoc } from "firebase/firestore/lite";
// // console.log(db)
// const products = ref([])
// //reading firestore data
// onMounted( async()=>{
//     const result = await getDocs(collection(db,"vuestore"));
// result.forEach((doc)=>{
//     let product = doc.data();
//     product.id=doc.id;
//     console.log("product:",product);
//     products.value.push(product);
// });
// });

// const getData = async ()=>{
//     const querySnapshot = await getDocs(collection(db,"vuestore"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// }
// onMounted(async ()=>{
//     await getData();
// });
// const products = productsData
// console.log("Products:",products);
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

//Part 10 api calls
// let Products = ref([]) // REACTIVE VARIABLE
//  onMounted(async ()=>{
//     // let res = await fetch('https://fakestoreapi.com/products')
//     // let data = await res.json();
//     // console.log('data:', data);
//     // Products.value=data;
   
//     //axios
//     // axios.get('https://fakestoreapi.com/products')
//     // .then(function(response){
//     //     Products.value=response.data
//     //     console.log(response)
//     // }).catch(function(error){

//     // }).finally(function(){
//     //     //.always executed
//     // })

//         let res = await axios.get('https://fakestoreapi.com/products');
//         Products.value=res.data;

// });
 
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