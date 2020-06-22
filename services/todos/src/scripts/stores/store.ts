import {createStore} from 'redux'
import rootReducer from './reducers'
import {TodoState} from './reducers/types'

export default createStore(rootReducer)

export interface RootState {
    todos: TodoState
}
