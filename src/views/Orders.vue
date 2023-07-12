<template>
   <NavbarComponent/>
  <div id="container">
    
    <q-form @submit="onSubmit" id="orders_form" class="q-gutter-md">
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
        v-model="from.address"
        label="Your address *"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" id="btn" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { reactive } from 'vue';
  import NavbarComponent from '../components/HomePageComponents/Navbar.vue';
const from = reactive({
    name:"",
    contact:null,
    address:"",
})
</script>

<style scoped>

#container {
    margin-top: 10%;
}
#orders_form {
    width: 50%;
}

</style>
