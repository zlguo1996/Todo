import { RootState } from 'stores/store'

export * from './filterSelectors'
export * from './todoSelectors'

import {getTodoIds, getTodoItem} from './todoSelectors'
import {getFilterState} from './filterSelectors'

export const getFilteredTodos = (state: RootState) => {
    const ids = getTodoIds(state)
    const filters = getFilterState(state).visible

    return ids.filter(id => filters.some(filter => filter === getTodoItem(state, id).state))
}
