<template>
<h1>{{ msg }}</h1>
<h3>{{ anotherMsg }}</h3>
<h>{{ count }}</h>
<button  @click="increment()">increment</button>
</template>

<script setup>
//setup is for composition api 

import {ref} from "vue";
defineProps(["msg", "anotherMsg"])
let count=ref(0)
const increment=()=>{
    count.value++;
    console.log("count",count.value);
}

//Options API
/* export default {
     data(){
        return {
            count:0,
 };
    },  methods:{        increment(){
             this.count++ ;
        }
     }
}*/ 
</script>

<style scoped>

</style>