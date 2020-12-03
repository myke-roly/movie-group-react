import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const api_key = process.env.REACT_APP_API;

export default async (url, params) => {
  return await axios.get(baseURL + url, {
    params: {
      api_key,
      ...params,
    },
  });
};
