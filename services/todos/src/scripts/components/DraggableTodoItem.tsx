import React, {FunctionComponent, useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import {ItemTypes, TodoItemType} from 'models/DraggableItemTypes'
import {moveTodoItemAction} from 'stores/actions/todoActions'
import store from 'stores/store'
import {TodoItem} from './TodoItem'

interface DraggableTodoItemProps {
    itemId: string,
    index: number,
}

export const DraggableTodoItem: FunctionComponent<DraggableTodoItemProps> = (props) => {
    const {
        itemId,
        index,
    } = props

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

            item.index = hoverIndex
        }
    })

    drag(drop(ref))

    return <TodoItem ref={ref} itemId={itemId} visibility={!isDragging} />
}
DraggableTodoItem.displayName = 'DraggableTodoItem'

interface CollectProps {
    isDragging: boolean
}
