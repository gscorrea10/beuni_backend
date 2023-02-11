import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50',
});

export { api };
