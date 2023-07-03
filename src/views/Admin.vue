<template>
    <div>
        <NavbarComponent />
        <h1>This is admin page</h1>
        <!-- <input v-model="name" type="text" />
        <input v-model="contact" type="number" />{{ name }} {{ contact }} -->
        <input v-model="form.name" type="text"/>
        <input v-model="form.contact" type="number"/>
        <input v-model="form.city" type="text"/>
        <input v-model="form.age" type="number"/>{{form}}
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import NavbarComponent from "../components/HomePageComponents/Navbar.vue"
// const name = ref("")
// const contact = ref(0)
const form  = reactive({
    name:'',
    contact:0,
    city:'',
    age:0,

})
</script>

<style scoped></style>