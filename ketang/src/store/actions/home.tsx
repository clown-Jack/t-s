import * as types from '../actions-types';
import { TypeAction, TypeThunkFunction } from '../../typings/comm'
import { Dispatch, Store } from 'redux'
import { getSliders, getLessons } from '../../api/home'
import { message } from 'antd';
let actions =  {
    setCurrentCategory(payload: string): any {
        return async function(dispatch:Dispatch){
            await dispatch({ type: types.SET_CURRENT_CATEGORY, payload });
            actions.refreshLessons();
        }
    },
    getSliders(): TypeAction {
        return { type: types.GET_SLIDERS, payload: getSliders() }
    },
    getLessons():any {
        return async function (dispatch: Dispatch, getState: Store['getState']) {
            let { currentCategory ,lessons:{loading,offset,limit,hasMore}} = getState().home;
            if(!loading&&hasMore){
                 dispatch({type:types.SET_LESSONS_LOADING,payload:true})  //让lesson处于加载中
                 let result:any = await getLessons(currentCategory,offset,limit);
                 if(result.code == 0){
                     dispatch({type:types.SET_LESSONS,payload:result.data})
                 }else{
                     message.error(result.error);
                 }
            }
        }
    },
    refreshLessons():any{
        return async function (dispatch: Dispatch, getState: Store['getState']) {
            let { currentCategory ,lessons:{loading,limit}} = getState().home;
            if(!loading){
                 dispatch({type:types.SET_LESSONS_LOADING,payload:true})  //让lesson处于加载中
                 let result:any = await getLessons(currentCategory,0,limit);
                 if(result.code == 0){
                     dispatch({type:types.REFRESH_LESSONS,payload:result.data})
                 }else{
                     message.error(result.error);
                 }
            }
        }
    }
}

export default actions;