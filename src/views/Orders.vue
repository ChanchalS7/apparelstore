<template>
<NavbarComponent/> 
 <div id="container">
  <q-form
      @submit="onSubmit"
      id="orders_form"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.name"
        label="Your name *"
        hint="Name and surname"
       
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your contact number *"
        
      />
      <q-input
      filled
      type="text"
      v-model="form.address"
      label="Your address *"
      />

    

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
       
      </div>
    </q-form>
 </div>
</template>

<script setup>
  import NavbarComponent from '../components/HomePageComponents/Navbar.vue';
import { reactive } from 'vue';
import {useCartStore} from "../store.js"
const cartStore = useCartStore();
const form = reactive({
    name:"",
    contact:null,
    address:"",
    order:cartStore.cart,
    total:cartStore.cartTotal,
})
const onSubmit=()=>{
  console.log(form);
}
</script>

<style scoped>

#container {
    margin-top: 10%;
}
#orders_form {
    width: 50%;
}

</style>
