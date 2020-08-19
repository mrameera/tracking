import { url } from 'https://service.3aldor.com/api/users/';
import axios from 'axios'
 
export const walfClient = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});