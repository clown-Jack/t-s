import axios from './index';
import { TypeAnyObject } from '../typings/comm';
export function validate(){
    //这个promise resolve的结果就是一个对象
     return axios.get("/api/validate");
}
export function register(values:TypeAnyObject){
    return axios.post("/api/register",values);
}
export function login(values:TypeAnyObject){
    return axios.post("/api/login",values);
}
export function logout(){
    return axios.get("/api/logout");
}