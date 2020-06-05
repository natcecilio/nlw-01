import axios from 'axios';

const api = axios.create({
  baseURL: 'http://http://192.168.100.2:3333'
});

export default api;