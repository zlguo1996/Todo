import {TodoState} from './types'
import {TodoActionTypes} from '../actions/todoActions'
import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, MODIFY_TODO_ITEM, MOVE_TODO_ITEM, UPDATE_TODO_ITEMS} from '../actions/types'
import {limitInRange} from 'models/utils'

const initialState: TodoState = {
    order: [],
    items: {},
}

export default function todoReducer(
    state: TodoState = initialState,
    action: TodoActionTypes
): TodoState {
    switch (action.type) {
        case MODIFY_TODO_ITEM: {
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {
                        ...state.items[action.id],
                        ...action.item,
                    },
                },
            }
        }
        case MOVE_TODO_ITEM: {
            const res = {
                ...state,
                order: [...state.order]
            }
            const index = res.order.findIndex((val) => val === action.id)
            const availableRange: [number, number] = [0, res.order.length - 1]
            const insertIndex = limitInRange(action.targetIndex, availableRange)

            res.order.splice(index, 1)
            res.order.splice(insertIndex, 0, action.id)

            return res
        }
        case UPDATE_TODO_ITEMS: {
            const items: TodoState['items'] = {}
            const order: TodoState['order'] = []
            action.items.forEach(item => {
                items[item.id] = item
                order.push(item.id)
            })

            return {
                items,
                order
            }
        }
        default: {
            return state
        }
    }
}
