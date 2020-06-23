import React, {forwardRef, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {getTodoItem} from 'stores/selectors/todoSelectors'
import {RootState} from 'stores/store'
import {TodoItem as TodoItemData} from 'models/todo'
import InputBase from '@material-ui/core/InputBase'
import Checkbox from '@material-ui/core/Checkbox'
import store from 'stores/store'
import {modifyTodoItem, removeTodoItem} from 'stores/actions/todoActions'
import {makeStyles} from '@material-ui/styles'

interface TodoItemProps {
    itemId: string,
    visibility?: boolean,
}

interface StyleProps {
    visibility: boolean
}

const defaultProps = {
    visibility: true
}

const useStyles = makeStyles({
    root: {
        opacity: (props: StyleProps) => props.visibility ? '1' : '0'
    },
    text: {

    }
})

export const TodoItem = forwardRef<HTMLDivElement, TodoItemProps>((props, ref) => {
    const {
        itemId,
        visibility,
    } = {
        ...defaultProps,
        ...props,
    }

    const item = useSelector<RootState, TodoItemData>(state => getTodoItem(state, itemId))

    const tryRemoveItem = () => {
        if (item.text === '') {
            store.dispatch(removeTodoItem({
                id: itemId
            }))
        }
    }

    const className = useStyles({
        visibility
    })

    return <div ref={ref} className={className.root}>
        <Checkbox checked={item.state === "Completed"} onChange={event => store.dispatch(modifyTodoItem({
            id: itemId,
            item: {
                state: event.target.checked ? "Completed" : "Incomplete",
            }
        }))} />
        <InputBase multiline value={item.text} onBlur={tryRemoveItem}
            onChange={event => store.dispatch(modifyTodoItem({
                id: itemId,
                item: {
                    text: event.target.value,
                }
            }))}
            inputProps={{ 'aria-label': 'naked' }}
        />
    </div>
})
TodoItem.displayName = 'TodoItem'