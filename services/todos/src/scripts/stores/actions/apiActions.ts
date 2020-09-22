import {QUERY_ITEMS, TRY_ADD_TODO_ITEM} from './types'
import {simpleActionFuncFactory} from './utils'
import {TodoItem} from 'common'

export type ApiActionTypes = QueryItemsAction | TryAddTodoItemAction

interface QueryItemsAction {
    type: typeof QUERY_ITEMS
}

export const queryItems = simpleActionFuncFactory<QueryItemsAction>(QUERY_ITEMS)

type TryAddTodoItemAction = {
    type: typeof TRY_ADD_TODO_ITEM
} & TodoItem

export function tryAddItem(text: string = ''): TryAddTodoItemAction {
    return {
        type: TRY_ADD_TODO_ITEM,
        text: text,
        state: 'Incomplete',
    }
}
