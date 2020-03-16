import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {routerMiddleware} from 'connected-react-router'
import history from './history'
const store = createStore(reducer,applyMiddleware(routerMiddleware(history),promise,thunk,logger));
export default store