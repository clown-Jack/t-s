import axios from './index';

export function getLesson(id:string){
   return axios.get(`/api/getLesson/${id}`)
}
