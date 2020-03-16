import {TypeAction} from '../../typings/comm'
export interface TypeMine{

}
const initState = {

}
export default function(state:TypeMine = initState,action:TypeAction){
     switch(action.type){
         default:
             return state
     }
}