import { defineStore } from "pinia";
import { ref } from "vue";
import { useFetch } from "./fetch.js";
const error = ref(null);
const get_data = ref(null);

export const useCart = defineStore("counter", {
  id: "cart",
  state: () => ({
    items: [],
    total: 0,
    quantity: [],
    get_items: [],
    quan: 1,
  }),
  actions: {
    addToCart(product, index) {
      console.log(this.items);
      if (this.items.includes(product)) {
        this.quantity[index + 1] += 1;
      } else {
        this.items.push(product);
        this.quantity[index + 1] = 1;
      }
      this.total += Number(product.price) * this.quantity[index + 1];
      this.quan = this.quantity[index + 1];

      try {
        const token = localStorage.getItem("token");

        const requestData = {
          product_id: product.id,
          quantity: this.quan,
        };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
          body: JSON.stringify(requestData),
        };

        useFetch("http://127.0.0.1:8000/cart/add-to-cart/", options)
          .then((res) => {
            get_data.value = res;
          })
          .catch((err) => {
            error.value = err;
          });
      } catch (err) {
        error.value = err;
        console.error("Error during fetching data:", err);
      }
    },

    removeFromCart(index,selected_item) { 
      try {
        const productid= selected_item.product.id
        const token = localStorage.getItem("token");
            const requestData = {
          product_id: productid,
        };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
          body: JSON.stringify(requestData),
        };
    
        useFetch("http://127.0.0.1:8000/cart/remove-from-cart/", options)
          .then((res) => {
            console.log("Item removed from cart:", res);
          })
          .catch((err) => {
            console.error("Error removing item from cart:", err);
          });
      } catch (err) {
        console.error("Error during fetching data:", err);
      }
    }
  },

})

export function get_all_cart() {
  const error = ref(null);
  const cart_items = ref(null);
  try {
    const token = localStorage.getItem("token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    };
    useFetch("http://127.0.0.1:8000/cart/get-from-cart/", options)
      .then((res) => {
        cart_items.value = res;
      })
      .catch((err) => {
        error.value = err;
      });
  } catch (err) {
    error.value = err;
    console.error("Error during fetching data:", err);
  }
  return { cart_items, error }
}
