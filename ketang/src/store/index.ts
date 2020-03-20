import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import reducer from './reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import history from './history'
import { TypeRootState } from './reducers'
const store: Store<TypeRootState, AnyAction> = createStore(reducer, applyMiddleware(routerMiddleware(history), promise, thunk, logger));
export default store