import { response } from 'express';
import { send, sendPromise } from './utils';

export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getCatalog(onSuccess, onError) {
    return sendPromise(`${this.apiUrl}/catalog`)
      .then((data) => {
        return JSON.stringify(data)
      })
  }

  getCart(onSuccess, onError) {
    return sendPromise(`${this.apiUrl}/cart`)
      .then((data) => {
        return JSON.stringify(data)
      })
  }

  getProduct(id) {
    fetch(`${this.api_url}/catalog/:${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return Object.assign({}, data.list.find((item) => item.id === id));
      })
  }

  addToCart(id) {
    fetch(`${this.api_url}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.getProduct(id))
    })

  }

  removeFromCart(id) {
    fetch(`${this.api_url}/cart/${id}`, {
      method: "DELETE",
    })
  }
}
