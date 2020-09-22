import {RootState} from '../store'

export const getTodoState = (state: RootState) => state.todos

export const getTodoIds = (state: RootState) => getTodoState(state).order

export const getTodoItem = (state: RootState, id: number) => getTodoState(state).items[id]
