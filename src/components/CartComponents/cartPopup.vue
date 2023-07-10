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
            <div id="cart_product">
                <div id="lhs"></div>
                <div id="rhs"></div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
</template>

<script setup>
import {ref} from "vue";
  const dialog = ref(true);
  defineProps(["dialogVisibility"]);
</script>

<style scoped>
#cart_card{
  height: 900px;
  margin-top: 10%;
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
#rhs{
    display: flex;
    flex: 4;
}

</style>