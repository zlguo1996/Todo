import {TodoState} from './types'
import {TodoActionTypes} from '../actions/todoActions'
import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, MODIFY_TODO_ITEM, MOVE_TODO_ITEM} from '../actions/types'
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
    case ADD_TODO_ITEM: {
            return {
                ...state,
                order: [
                    action.id,
                    ...state.order,
                ],
                items: {
                    ...state.items,
                    [action.id]: {
                        ...action.item
                    }
                }
            }
        }
        case REMOVE_TODO_ITEM: {
            const res = {
                ...state,
                order: [...state.order],
                items: {...state.items},
            }

            const index = res.order.findIndex((val) => val === action.id)
            delete res.order[index]
            delete res.items[action.id]

            return res
        }
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

            res.order.splice(index, 1).splice(insertIndex, 0, action.id)

            return res
        }
        default: {
            return state
        }
    }
}
