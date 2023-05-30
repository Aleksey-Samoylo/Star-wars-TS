import axios from "axios";

axios.defaults.baseURL = 'https://desfarik.github.io/star-wars/api';

const responseBody = (response: any) => response.data

// не знаю как на TS реализовать различность Body и params
const requests = {
  get: (url: string, params?: any) => axios.get(url+'.json',params).then(responseBody),
  post: (url: string, body: any, params?: any) => axios.post(url, body, params).then(responseBody),
  put: (url: string, body: any, params?: any) => axios.put(url, body, params).then(responseBody),
  del: (url: string, params?: any) => axios.delete(url, params).then(responseBody),
}
interface param {
    films: () => void,
    details: (engagementId: string) => void
}
export const StarWars = {
    films: (page: string = 'all') => requests.get(`/film/${page}`),
    peoples: (page: string = 'all') => requests.get(`/people/${page}`),
    planets: (page: string = 'all') => requests.get(`/planet/${page}`),
    starships: (page: string = 'all') => requests.get(`/starship/${page}`),
    venicles: (page: string = 'all') => requests.get(`/venicle/${page}`),
}

