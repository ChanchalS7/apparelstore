<template>
    <div id="navbar">
        <div id="lhs">Home</div>
        <div id="rhs">
           <div>Account</div>
           <div id="cart"></div>
           <div id="cart_count">1</div>
        </div>

    </div>
</template>

<script setup>
   
</script>

<style scoped>
#navbar{
    display: flex;
    height: 70px;
    align-items: center;
    font-size: 130%;
    border-bottom: solid 1px black;
    margin: 0;
}
#lhs{
    display: flex;
    flex:3;
    align-items: center;

}
#rhs {
    display:flex;
    flex: 7;
    align-items: center;
    justify-content: flex-end;
}
</style>