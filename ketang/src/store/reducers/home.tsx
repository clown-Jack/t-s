import {TypeAction} from '../../typings/comm'
export interface TypeHome{

}
const initState = {

}
export default function(state:TypeHome = initState,action:TypeAction){
     switch(action.type){
         default:
             return state
     }
}