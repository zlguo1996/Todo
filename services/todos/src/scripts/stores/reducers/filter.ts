import {FilterState, FilterActionTypes} from '../actions/filterActions'
import {MODIFY_FILTER} from '../actions/types'

const initialState: FilterState = {
    visible: ['Completed', 'Incomplete']
}

export default function FilterReducer(
    state: FilterState = initialState,
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
