import React, {FunctionComponent, useState} from 'react'
import store from 'stores/store'
import {addTodoItem} from 'stores/actions/todoActions'
import TextField from '@material-ui/core/TextField'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    icon: {
        padding: '9px',
    }
})


export const AddTodoItem: FunctionComponent = () => {
    const className = useStyles()
    const [text, setText] = useState<string>('')

    const tryAddItem = () => {
        if (text === '') {
            return
        }

        store.dispatch(addTodoItem(text))

        setText('')
    }

    return <div>
        <AddCircleIcon className={className.icon} />
        <TextField multiline value={text} onChange={event => setText(event.target.value)} onBlur={tryAddItem} />
    </div>
}
AddTodoItem.displayName = 'AddTodoItem'
