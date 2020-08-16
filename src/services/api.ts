import axios from 'axios';
//192.168.0.15
//127.0.0.1
const api = axios.create({
    baseURL: 'http://127.0.0.1:3333'
});

export default api;