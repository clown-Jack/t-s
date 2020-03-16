import {TypeAction} from '../../typings/comm'
export interface TypeProfile{

}
const initState = {

}
export default function(state:TypeProfile = initState,action:TypeAction){
     switch(action.type){
         default:
             return state
     }
}