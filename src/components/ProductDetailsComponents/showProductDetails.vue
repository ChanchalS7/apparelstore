
<template>
    <div id="container">
        <!-- <h1>This is Product details page</h1> -->
        <div id="lhs">
            <img :src="product.imageUrl" alt=""/>
        </div>
        <div id="rhs">
            <p>{{ product.title }}</p>
            <p>{{product.price}}</p>
            <q-btn @click="addtoCart(product)" id="addtocart_btn" color="black" label="Add To Cart"/>
       
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {db, doc, getDoc} from "../../firebase.js"
import {useRoute} from "vue-router"
import { useCartStore } from "../../store.js";
const route = useRoute();
const cartStore=useCartStore();
const product = ref({});

//Mounting the data    
onMounted(async()=>{
const docRef = doc(db, "vuestore", route.params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("docSnap:",docSnap.id);
    let prod = docSnap.data();
    prod.id=docSnap.id;
    product.value = prod;
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
});
const addtoCart=(product)=>{
    //calling the action present in store.js
 
    cartStore.addtoCart(product)
    
// console.log("product:",product);

}
</script>

<style scoped>
#container{
    display: flex;
    margin-top: 5%;
    
}
#lhs {
    display: flex;
    flex: 4;
}
#lhs img {
    width: 60%;
}
#rhs{
    display: flex;
    flex: 6;
    flex-direction: column;
    margin-left: 3%;
    font-size: 180%;
}
#addtocart_btn{
    width: 50%;

}
</style>