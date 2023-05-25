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
    film: (page: string = 'all') => requests.get(`/film/${page}`),
    people: (page: string = 'all') => requests.get(`/people/${page}`),
    planet: (page: string = 'all') => requests.get(`/planet/${page}`),
    starShip: (page: string = 'all') => requests.get(`/starship/${page}`),
    venicle: (page: string = 'all') => requests.get(`/venicle/${page}`),
}

