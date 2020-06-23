import React, {FunctionComponent, useRef} from 'react'
import {useSelector} from 'react-redux'
import {getTodoItem} from 'stores/selectors/todoSelectors'
import {RootState} from 'stores/store'
import {TodoItem as TodoItemData} from 'models/todo'
import {useDrag, useDrop} from 'react-dnd'
import {ItemTypes, TodoItemType} from 'models/DraggableItemTypes'
import {moveTodoItemAction} from 'stores/actions/todoActions'
import store from 'stores/store'

interface TodoItemProps {
    itemId: string,
    index: number,
}

export const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
    const {
        itemId,
        index,
    } = props

    const item = useSelector<RootState, TodoItemData>(state => getTodoItem(state, itemId))

    const ref = useRef<HTMLDivElement>(null)

    const [{isDragging}, drag] = useDrag<TodoItemType, unknown, CollectProps>({
        item: {
            type: ItemTypes.TodoItem,
            id: itemId,
            index: index,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const [, drop] = useDrop<TodoItemType, unknown, unknown>({
        accept: ItemTypes.TodoItem,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            store.dispatch(moveTodoItemAction({
                id: item.id,
                targetIndex: hoverIndex,
            }))

            console.log(`move to ${hoverIndex}`)

            item.index = hoverIndex
        }
    })

    drag(drop(ref))

    return <div ref={ref}>{item.text}</div>
}
TodoItem.displayName = 'TodoItem'

interface CollectProps {
    isDragging: boolean
}
