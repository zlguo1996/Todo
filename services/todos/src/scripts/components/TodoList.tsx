import React, {FunctionComponent} from 'react'
import {TodoItem} from './TodoItem'
import {useSelector} from 'react-redux'
import {getTodoIds} from 'stores/selectors/todoSelectors'

export const TodoList: FunctionComponent<{}> = () => {
    const todoIds = useSelector(getTodoIds)
    return <div>
        {todoIds.map(id => <TodoItem itemId={id} />)}
    </div>
}
TodoList.displayName = 'TodoList'
