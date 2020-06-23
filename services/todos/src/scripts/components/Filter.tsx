import React, {FunctionComponent} from 'react'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'
import {modifyFilter} from 'stores/actions/filterActions'
import {getFilterState} from 'stores/selectors'
import {useSelector, useDispatch} from 'react-redux'
import {TodoItemState} from 'models/todo'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '9px 0px',
    }
})

export const Filter: FunctionComponent = () => {
    const className = useStyles()
    const state = useSelector(getFilterState)
    const dispatch = useDispatch()

    const labels = ['All', 'Completed', 'Incomplete']
    const labelFilter: TodoItemState[][] = [['Completed', 'Incomplete'], ['Completed'], ['Incomplete']]
    const selected = state.visible.length === 2 ? 'All' : state.visible[0]

    return <div className={className.root}>
        {/* <Typography variant="caption" gutterBottom>Filters: </Typography> */}
        {labels.map((label, index) => (
            <Chip
                size="small" label={label} variant="outlined" color={label === selected ? 'primary' : 'default'}
                onClick={() => dispatch(modifyFilter({
                    state: {
                        visible: labelFilter[index]
                    }
                }))}
            />
        ))}
    </div>
}
Filter.displayName = 'Filter'
