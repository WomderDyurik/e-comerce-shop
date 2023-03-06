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
      }
    }
  },
  getters: {
    totalPrice() {
      let sum
      if(this.cart.length > 1){
        sum = this.cart.reduce((a, b) => {
          return a.total + b.total;
        });
        return sum.toFixed(2)
      } else if (this.cart.length = 1) {
        return this.cart[0].total.toFixed(2)
      }
    }
  }
})