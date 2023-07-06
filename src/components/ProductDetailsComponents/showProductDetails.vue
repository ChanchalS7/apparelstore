
<template>
    <div id="container">
        <!-- <h1>This is Product details page</h1> -->
        <div id="lhs">
            <img :src="product.imageUrl" alt=""/>
        </div>
        <div id="rhs">
            <p>{{ product.title }}</p>
            <p>{{product.price}}</p>
       
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {db, doc, getDoc} from "../../firebase.js"
import {useRoute} from "vue-router"
const route = useRoute();
const product = ref({});
onMounted(async()=>{
const docRef = doc(db, "vuestore", route.params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  product.value=docSnap.data()
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
});
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
</style>