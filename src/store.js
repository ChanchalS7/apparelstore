import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCartStore = defineStore('cart', ()=>{
  // other options...
  const cart = ref([]);
  const cartCount=computed(()=>cart.value.length);
  //actions are functions which change state properties 
  const addtoCart =(product)=>{
    cart.value.push(product)
    console.log("cart.value",cart.value)
  }
  const removefromCart =(id)=>{
    cart.value=cart.value.filter((el)=>{
      return el.id !== id;
    })
  }
  const cartTotal = computed(() => {
    return cart.value.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
  });
  return {cartCount, addtoCart,cart, removefromCart, cartTotal};
});