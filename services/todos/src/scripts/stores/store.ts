import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import {TodoState} from './reducers/types'
import {composeWithDevTools} from 'redux-devtools-extension'
import { FilterState } from './actions/filterActions'
import {sagaMiddleware, rootSaga} from './middlewares'

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware,
    ))
)

sagaMiddleware.run(rootSaga)

export interface RootState {
    todos: TodoState,
    filter: FilterState,
}
