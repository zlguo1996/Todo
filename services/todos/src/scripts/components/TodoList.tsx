import React, {FunctionComponent} from 'react'
import {DraggableTodoItem} from './DraggableTodoItem'
import {useSelector} from 'react-redux'
import {getTodoIds} from 'stores/selectors'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {makeStyles} from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import {AddTodoItem} from './AddTodoItem'
import {Filter} from './Filter'
import {getFilteredTodos} from 'stores/selectors'

const useStyles = makeStyles({
    paper: {
        padding: '10px',
    }
})

export const TodoList: FunctionComponent<{}> = () => {
    const className = useStyles()

    const todoIds = useSelector(getFilteredTodos)

    return <DndProvider backend={HTML5Backend}>
            <Paper className={className.paper}>
                <Filter />
                <AddTodoItem key="add-todo-item" />
                {todoIds.reduce<JSX.Element[]>(
                    (prev, id, index) => {
                        const todo = <DraggableTodoItem key={id} itemId={id} index={index} />
                        const divider = <Divider key={`divider-${index}`} />
                        const isLast = index === todoIds.length - 1

                        prev.push(todo)
                        if (!isLast) {
                            prev.push(divider)
                        }

                        return prev
                    },
                    []
                )}
            </Paper>
    </DndProvider>
}
TodoList.displayName = 'TodoList'
