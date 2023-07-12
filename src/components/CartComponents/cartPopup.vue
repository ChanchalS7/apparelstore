<template>
    <div id="cart">
      
        <q-dialog :seamless="true" :modelValue="dialogVisibility" v-model="dialog" position="right">
      <q-card id="cart_card">
        <q-card-section>
          <div>
           <h4>Recently Added Items</h4>
          </div>

          <q-space />
          <div id="cart_products">
            <div v-for="product in cartStore.cart" id="cart_product">
                <div  id="lhs"><img :src="product.imageUrl" alt=""/></div>
                <div id="rhs">
                  <p>{{ product.title }}</p>
                  <p>{{ product.price }}</p>
                  <q-icon @click="removefromCart(product.id)" name="delete"/>
                </div>
               
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
</template>

<script setup>
import {ref} from "vue";
import { useCartStore } from "../../store.js";
  const dialog = ref(true);
  const cartStore = useCartStore();
  defineProps(["dialogVisibility"]);
  const removefromCart = (id)=>{
    //action to change the data in our global store 
    cartStore.removefromCart(id);
  }
</script>

<style scoped>
#cart_card{
  height: 900px;
  margin-top: 10%;
  width: 360px;
}
#cart_product{
    display: flex;
}
#cart_product div{
    border: solid 1px black;
    margin-top: 4%;
}
#lhs{
    display: flex;
    flex: 6;
}
#lhs img{
  width: 90%;
}
#rhs{
    display: flex;
    flex: 4;
    flex-direction: column;
}

</style>