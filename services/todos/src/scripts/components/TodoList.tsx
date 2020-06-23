import React, {FunctionComponent} from 'react'
import {TodoItem} from './TodoItem'
import {useSelector} from 'react-redux'
import {getTodoIds} from 'stores/selectors/todoSelectors'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

export const TodoList: FunctionComponent<{}> = () => {
    const todoIds = useSelector(getTodoIds)
    return <DndProvider backend={HTML5Backend}>
        {todoIds.map((id, index) => <TodoItem key={id} itemId={id} index={index} />)}
    </DndProvider>
}
TodoList.displayName = 'TodoList'
