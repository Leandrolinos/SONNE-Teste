import axios from 'axios';

const api = axios.create({
    baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
})

export default api

