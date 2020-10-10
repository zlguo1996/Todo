import React, {FunctionComponent} from 'react'
import Chip from '@material-ui/core/Chip'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {modifyFilter} from 'stores/actions/filterActions'
import {getFilterState} from 'stores/selectors'
import {useSelector, useDispatch} from 'react-redux'
import {TodoItemState} from 'common'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(1),
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }
}))

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
                key={label} size="small" label={label} variant="outlined" color={label === selected ? 'primary' : 'default'}
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
