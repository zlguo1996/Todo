import {QUERY_TODO_ITEMS, REMOVE_TODO_ITEM, ADD_TODO_ITEM, MODIFY_TODO_ITEM, MOVE_TODO_ITEM} from './types'
import {simpleActionFuncFactory} from './utils'
import {TodoItem} from 'common'

export type ApiActionTypes = QueryTodoItemsAction | AddTodoItemAction | RemoveTodoItemAction | ModifyTodoItemAction | MoveTodoItemAction

interface QueryTodoItemsAction {
    type: typeof QUERY_TODO_ITEMS
}

export function queryTodoItems(): QueryTodoItemsAction {
    return {
        type: QUERY_TODO_ITEMS
    }
}

export type AddTodoItemAction = {
    type: typeof ADD_TODO_ITEM
} & TodoItem

export function addTodoItem(text: string = ''): AddTodoItemAction {
    return {
        type: ADD_TODO_ITEM,
        text: text,
        state: 'Incomplete',
    }
}

export interface RemoveTodoItemAction {
    type: typeof REMOVE_TODO_ITEM,
    id: number,
}

export const removeTodoItem = simpleActionFuncFactory<RemoveTodoItemAction>(REMOVE_TODO_ITEM)

export interface ModifyTodoItemAction {
    type: typeof MODIFY_TODO_ITEM,
    id: number,
    item: Partial<TodoItem>,
}

export const modifyTodoItem = simpleActionFuncFactory<ModifyTodoItemAction>(MODIFY_TODO_ITEM)

export interface MoveTodoItemAction {
    type: typeof MOVE_TODO_ITEM,
    id: number,
    targetIndex: number,
}

export const moveTodoItem = simpleActionFuncFactory<MoveTodoItemAction>(MOVE_TODO_ITEM)
