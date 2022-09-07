import axios from 'axios';

const api = axios.create({
  baseURL: ' https://api-football-v1.p.rapidapi.com/v3/',
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'f3ca64f144msh19cb1067f0d0c7fp10e016jsnb90f227ae4ab',
  },
});

export default api;
