import {FilterState, FilterActionTypes} from '../actions/filterActions'
import {MODIFY_FILTER} from '../actions/types'

const initialState = {
    visible: ['Completed', 'Incomplete']
}

export default function FilterReducer(
    state: FilterState,
    action: FilterActionTypes,
): FilterState {
    switch (action.type) {
        case MODIFY_FILTER: {
            return {
                ...state,
                ...action.state,
            }
        }
        default: {
            return state
        }
    }

}
