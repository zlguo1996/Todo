import React, {FunctionComponent, useState, useRef} from 'react'
import {addTodoItem} from 'stores/actions/todoActions'
import TextField from '@material-ui/core/TextField'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {makeStyles} from '@material-ui/styles'
import {useDispatch} from 'react-redux'

const useStyles = makeStyles({
    icon: {
        padding: '9px',
    }
})


export const AddTodoItem: FunctionComponent = () => {
    const className = useStyles()
    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()

    const tryAddItem = () => {
        if (text === '') {
            return
        }

        dispatch(addTodoItem(text))

        setText('')
    }

    const textRef = useRef<HTMLDivElement>(null)
    const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            tryAddItem()
        }
    }

    return <div>
        <AddCircleIcon className={className.icon} />
        <TextField ref={textRef} value={text} onChange={event => setText(event.target.value)} onBlur={tryAddItem} onKeyPress={keyDownHandler} />
    </div>
}
AddTodoItem.displayName = 'AddTodoItem'
