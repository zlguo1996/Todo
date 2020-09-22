import {TodoItem} from 'common'

export interface TodoState {
    order: number[],
    items: {
        [key: number]: TodoItem,
    },
}
