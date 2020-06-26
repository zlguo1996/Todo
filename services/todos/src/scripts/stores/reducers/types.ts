import {TodoItem} from 'common'

export interface TodoState {
    order: string[],
    items: {
        [key: string]: TodoItem,
    },
}
