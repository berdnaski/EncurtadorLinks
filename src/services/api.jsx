import axios from 'axios';

export const key = "868d7cc481361471ce9336cf4e8e81d59067d685";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;
