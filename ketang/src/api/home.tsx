import axios from './index';
export function getSliders(){
     return axios.get("/api/getSliders");
}
export function getLessons(category:string='all',offset:number=0,limit:number=5){
    return axios.get(`/api/getLessons?category=${category}&offset=${offset}&limit=${limit}`);
}