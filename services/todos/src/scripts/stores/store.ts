import {createStore} from 'redux'
import rootReducer from './reducers'
import {TodoState} from './reducers/types'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(rootReducer, composeWithDevTools())

export interface RootState {
    todos: TodoState
}
