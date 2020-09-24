import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, MODIFY_TODO_ITEM, MOVE_TODO_ITEM, UPDATE_TODO_ITEMS} from './types'
import {TodoItem, FullTodoItem} from "common"
import {simpleActionFuncFactory} from './utils'
import {ApiActionTypes} from './apiActions'

export type TodoActionTypes = UpdateTodoItemsActon | ApiActionTypes

interface UpdateTodoItemsActon {
    type: typeof UPDATE_TODO_ITEMS,
    items: FullTodoItem[]   // ordered by 'order'
}

export const updateTodoItems = simpleActionFuncFactory<UpdateTodoItemsActon>(UPDATE_TODO_ITEMS)
