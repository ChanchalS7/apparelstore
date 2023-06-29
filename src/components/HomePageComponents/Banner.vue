<template>
    <div id="welcome_div">
        <h1>{{welcomemsg}}</h1>
        <template>
            <q-btn color="white" text-color="black" label="Standard" />
    
 
</template>
    </div>
</template>

<script setup>
defineProps(["welcomemsg"])
 
</script>

<style scoped>
#h1{
    font-weight: 500;
    font-size: 3rem;
}
#welcome_div{
    display: flex;
    height: 200px;
    border-bottom: solid 1px black;
    justify-content: center;
    align-items: center;
    color: rgb(54,126,89);

}
</style>