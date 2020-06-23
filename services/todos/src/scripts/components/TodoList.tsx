import React, {FunctionComponent} from 'react'
import {DraggableTodoItem} from './DraggableTodoItem'
import {useSelector} from 'react-redux'
import {getTodoIds} from 'stores/selectors/todoSelectors'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {makeStyles} from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import {AddTodoItem} from './AddTodoItem'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        padding: '10px',
    }
})

export const TodoList: FunctionComponent<{}> = () => {
    const className = useStyles()

    const todoIds = useSelector(getTodoIds)

    return <DndProvider backend={HTML5Backend}>
        <div className={className.root}>
            <Paper className={className.paper}>
                <AddTodoItem key="add-todo-item" />
                {todoIds.map(
                    (id, index) => {
                        const todo = <DraggableTodoItem key={id} itemId={id} index={index} />
                        const divider = <Divider key={`divider-${id}`} />
                        const isLast = index === todoIds.length - 1

                        if (isLast) {
                            return todo
                        }

                        return [todo, divider]
                    }
                )}
            </Paper>
        </div>
    </DndProvider>
}
TodoList.displayName = 'TodoList'
