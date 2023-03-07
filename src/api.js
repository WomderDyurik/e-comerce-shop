import axios from "axios";
import config from '@/config.js'

export const HTTP = axios.create({
  baseURL: config.MOCK,
})

export default {
  async getPopularProducts() {
    try {
      const response = await HTTP.get('/products?limit=4')
      return response.data
    } catch (error) {
      alert(error.message)
    }
  },
  async getCategories() {
    try {
      const response = await HTTP.get('/products/categories')
      return response.data
    } catch (error) {
      alert(error.message)
    }
  },
  async getProduct(id) {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          Prefer: `code=200, example=Example ${id}`
        }
      })
      return response.data
    } catch (error) {
      alert(error.message)
    }
  },
  async getAllProducts() {
    try {
      const response = await HTTP.get(`/products`)
      return response.data
    } catch (error) {
      alert(error.message)
    }
  },
  async getAllProductsOfCategories(category) {
    try {
      const response = await HTTP.get(`/products/category/${category}`)
      return response.data
    } catch (error) {
      alert(error.message)
    }
  },
  async getSortedProducts(value) {
    try {
      const response = await HTTP.get(`/products?sort=${value}`)
      return response.data
    } catch (error) {
      alert(error.message)
    }
  }
}