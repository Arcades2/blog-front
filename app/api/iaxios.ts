import axios from 'axios';

const iaxios = axios.create({
  baseURL: process.env.API_URL,
});

export default iaxios;
