import storeInstance, {RootState} from '../store'

export const getTodoState = (state: RootState) => state.todos

export const getTodoIds = (state: RootState) => getTodoState(state).order

export const getTodoItem = (state: RootState, id: string) => getTodoState(state).items[id]


