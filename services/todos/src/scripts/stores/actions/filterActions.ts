import {MODIFY_FILTER} from './types'
import {TodoItemState} from 'models/todo'
import { simpleActionFuncFactory } from './utils'

export interface FilterState {
    visible: TodoItemState[]
}

export type FilterActionTypes = ModifyFilterAction

interface ModifyFilterAction {
    type: typeof MODIFY_FILTER,
    state: Partial<FilterState>
}

export const modifyFilter = simpleActionFuncFactory<ModifyFilterAction>(MODIFY_FILTER)
