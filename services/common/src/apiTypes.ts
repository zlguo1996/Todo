import {FullTodoItem} from './itemTypes'

type ModifyItem = Partial<FullTodoItem> & Pick<FullTodoItem, 'id'>

type AddItem = Pick<FullTodoItem, 'state' | 'text'>
