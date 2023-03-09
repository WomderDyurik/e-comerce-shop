import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product,count) {

      const cartIndex = this.cart.findIndex( el => el.id === product.id)
      if(cartIndex === -1) {
        this.cart.push({...product, count});
        // localStorage.setItem('cartStorage', JSON.stringify(this.cart))
      }
    },
    deletCartItem(product) {
      this.cart = this.cart.filter(el => el.id !== product.id)
      if(this.cart.length === 0) {
        location.reload();
      }
      // localStorage.setItem('cartStorage', JSON.stringify(this.cart))

    }
  },
  getters: {
    totalPrice(arr) {
      let sum = 0
      if(arr.length > 1){
        for(let i = 0; i < arr.length; i++) {
          sum += arr[i].price * arr[i].count
        }
        return sum.toFixed(2)
      } else if (arr.length = 1) {
        let total = (arr[0].price * arr[0].count)
        return total.toFixed(2)
      }
    }
  }
})