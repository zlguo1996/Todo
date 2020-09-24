import {FullTodoItem} from './itemTypes'

export type ModifyItem = Partial<FullTodoItem> & Pick<FullTodoItem, 'id'>

export type AddItem = Omit<FullTodoItem, 'id' | 'order'>
