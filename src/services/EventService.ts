import axios, { AxiosResponse } from 'axios';
import { Movie } from '../types';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', // movie/now_playing?api_key=5bc6037ca25549cb1f9726c1ed94e79f
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    api_key: '5bc6037ca25549cb1f9726c1ed94e79f',
  },
});

export default {
  getNowPlaying(): Promise<AxiosResponse<Movie>> {
    return apiClient.get('/movie/438148');
  },
};
