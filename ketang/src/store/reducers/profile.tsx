import { TypeAction } from '../../typings/comm'
import LOGIN_TYPES from '../../typings/login-types'
import * as Types from '../actions-types'
export interface TypeProfile {
    loginState: LOGIN_TYPES,
    user: any,  //如果当前用户已经登陆了,需要把用户信息放到这个地方
    error: any  //如果请求状态失败了，就把失败的原因放到这个地方
}
const initState: TypeProfile = {
    loginState: LOGIN_TYPES.UN_VALIDATE,
    user: null,
    error: null
}
export default function (state: TypeProfile = initState, action: TypeAction): TypeProfile {
    switch (action.type) {
        case Types.VALIDATE:
            let { code, data, error } = action.payload;
            if (code === 0) { //说明当前用户正处于登录状态
                return { ...state, loginState: LOGIN_TYPES.LOGINED, user: data, error: null }
            } else {  //当前用户没有登录
                return { ...state, loginState: LOGIN_TYPES.UNLOGIN, user: null, error }
            }
        case Types.LOGOUT:
            return  { ...state, loginState: LOGIN_TYPES.UNLOGIN, user: null, error }
        case Types.CHANGE_AVATAR:
            return  { ...state, user:{...state.user,avatar:action.payload} }
        default:
            return state
    }
}