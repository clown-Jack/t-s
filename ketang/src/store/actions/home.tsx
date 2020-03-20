import * as types from '../actions-types';
import { TypeAction } from '../../typings/comm'
export default {
    setCurrentCategory(payload: string): TypeAction {
        return { type: types.SET_CURRENT_CATEGORY, payload }
    }
}