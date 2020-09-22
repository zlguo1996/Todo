import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, MODIFY_TODO_ITEM, MOVE_TODO_ITEM, UPDATE_TODO_ITEMS} from './types'
import {TodoItem, FullTodoItem} from "common"
import {simpleActionFuncFactory} from './utils'

export type TodoActionTypes = AddTodoItemAction | RemoveTodoItemAction | ModifyTodoItemAction | MoveTodoItemAction | UpdateTodoItemsActon

interface AddTodoItemAction {
    type: typeof ADD_TODO_ITEM,
    id: number,
    item: TodoItem,
}

export const addTodoItem = simpleActionFuncFactory<AddTodoItemAction>(ADD_TODO_ITEM)

interface RemoveTodoItemAction {
    type: typeof REMOVE_TODO_ITEM,
    id: number,
}

export const removeTodoItem = simpleActionFuncFactory<RemoveTodoItemAction>(REMOVE_TODO_ITEM)

interface ModifyTodoItemAction {
    type: typeof MODIFY_TODO_ITEM,
    id: number,
    item: Partial<TodoItem>,
}

export const modifyTodoItem = simpleActionFuncFactory<ModifyTodoItemAction>(MODIFY_TODO_ITEM)

interface MoveTodoItemAction {
    type: typeof MOVE_TODO_ITEM,
    id: number,
    targetIndex: number,
}

export const moveTodoItemAction = simpleActionFuncFactory<MoveTodoItemAction>(MOVE_TODO_ITEM)

interface UpdateTodoItemsActon {
    type: typeof UPDATE_TODO_ITEMS,
    items: FullTodoItem[]   // ordered by 'order'
}

export const updateTodoItemsAction = simpleActionFuncFactory<UpdateTodoItemsActon>(UPDATE_TODO_ITEMS)
