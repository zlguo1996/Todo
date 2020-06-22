import React, {FunctionComponent} from 'react'
import {useSelector} from 'react-redux'
import {getTodoItem} from 'stores/selectors/todoSelectors'
import {RootState} from 'stores/store'
import {TodoItem as TodoItemType} from 'models/todo'

interface TodoItemProps {
    itemId: string
}

export const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
    const item = useSelector<RootState, TodoItemType>(state => getTodoItem(state, props.itemId))
    return <div>{item.text}</div>
}
TodoItem.displayName = 'TodoItem'
