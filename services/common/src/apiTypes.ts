import {FullTodoItem} from './itemTypes'

type ModifyItem = Partial<FullTodoItem> & Pick<FullTodoItem, 'id'>

type AddItem = Omit<FullTodoItem, 'id' | 'order'>
