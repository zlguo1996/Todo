import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, MODIFY_TODO_ITEM, MOVE_TODO_ITEM} from './types'
import {TodoItem} from "models/todo"
import {generateId} from "models/utils"
import {simpleActionFuncFactory} from './utils'

export type TodoActionTypes = AddTodoItemAction | RemoveTodoItemAction | ModifyTodoItemAction | MoveTodoItemAction

interface AddTodoItemAction {
    type: typeof ADD_TODO_ITEM,
    id: string,
    item: TodoItem,
}

export function addTodoItem(text: string): AddTodoItemAction {
    return {
        type: ADD_TODO_ITEM,
        id: generateId(),
        item: {
            text: text,
            state: "Incomplete",
        }
    }
}

interface RemoveTodoItemAction {
    type: typeof REMOVE_TODO_ITEM,
    id: string,
}

export const removeTodoItem = simpleActionFuncFactory<RemoveTodoItemAction>(REMOVE_TODO_ITEM)

interface ModifyTodoItemAction {
    type: typeof MODIFY_TODO_ITEM,
    id: string,
    item: Partial<TodoItem>,
}

export const modifyTodoItem = simpleActionFuncFactory<ModifyTodoItemAction>(MODIFY_TODO_ITEM)

interface MoveTodoItemAction {
    type: typeof MOVE_TODO_ITEM,
    id: string,
    targetIndex: number,
}

export const moveTodoItemAction = simpleActionFuncFactory<MoveTodoItemAction>(MOVE_TODO_ITEM)
