import * as Types from '../actions-types';
import { validate, register ,login,logout} from '../../api/profile'
import { Dispatch, Store } from 'redux'
import { TypeAnyObject ,TypeThunkFunction} from '../../typings/comm'
import { message } from 'antd';
import { push } from 'connected-react-router'
export default {
    //这是一个方法 可以传递给组件 让组件调用 用来向服务器发请求
    validate() {
        //redux-promise中间件会拦截掉这个action 判断如果payload是一个promise，那么会等待这个promise完成，把payload的值变成promise resolve出来的值 重新派发给仓库
        return {
            type: Types.VALIDATE,
            payload: validate()
        }
    },
    //注册用户
    register(values: TypeAnyObject):any{  //redux-thunk
        return async function (dispatch: Dispatch, getState: Store['getState']) {
            let result: TypeAnyObject = await register(values);
            if (result.code == 0) {
                dispatch(push("/login"))
            } else {
                message.error(result.error)
            }
        }
    },
    //登录用户
    login(values: TypeAnyObject):any{  //redux-thunk
        return async function (dispatch: Dispatch, getState: Store['getState']) {
            let result: TypeAnyObject = await login(values);
            if (result.code == 0) {
                //如果登陆成功跳转到个人中心
                dispatch(push("/profile"))
            } else {
                message.error(result.error)
            }
        }
    },
    //退出登录
    logout(){
        return {
            type:Types.LOGOUT,
            payload:logout()
        }
    },
    changeAvatar(avatar:string){
        return {
            type:Types.CHANGE_AVATAR,
            payload:avatar
        }
    }
}
