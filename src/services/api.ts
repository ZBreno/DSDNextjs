import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.112.4.146:3001/'
  //lembrar de alterar endereço
});

export default api;