import {createStore} from 'redux'
import rootReducer from './reducers'
import {TodoState} from './reducers/types'
import {composeWithDevTools} from 'redux-devtools-extension'
import { FilterState } from './actions/filterActions'

export default createStore(rootReducer, composeWithDevTools())

export interface RootState {
    todos: TodoState,
    filter: FilterState,
}
