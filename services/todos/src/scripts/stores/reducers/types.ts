import {TodoItem} from 'models/todo'

export interface TodoState {
    order: string[],
    items: {
        [key: string]: TodoItem,
    },
}
