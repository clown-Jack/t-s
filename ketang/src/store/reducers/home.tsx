import {TypeAction} from '../../typings/comm';
import * as types from '../actions-types'
export interface TypeHome{
    currentCategory:string
}
const initState = {
    currentCategory:"all"
}
export default function(state:TypeHome = initState,action:TypeAction){
     switch(action.type){
         case types.SET_CURRENT_CATEGORY:
             return {...state,currentCategory:action.payload}
         default:
             return state
     }
}