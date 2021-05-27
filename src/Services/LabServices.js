import axios from 'axios';

export const getLabList = axios.get('http://127.0.0.1:8000/api/labs');
