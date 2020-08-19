import axios from 'axios'
  const url= "https://service.jojo.com/api/";

export const Callapi = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});