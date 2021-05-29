import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`;

export const getLabList = axios.get('http://127.0.0.1:8000/api/labs');

export const getInvList = axios.get('http://127.0.0.1:8000/api/inventories');

export const getItemList = axios.get('http://127.0.0.1:8000/api/items');
