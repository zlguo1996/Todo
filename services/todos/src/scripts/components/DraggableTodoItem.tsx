import React, {FunctionComponent, useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import {ItemTypes, TodoItemType} from 'models/DraggableItemTypes'
import {moveTodoItem} from 'stores/actions/apiActions'
import {TodoItem} from './TodoItem'
import {useDispatch} from 'react-redux'

interface DraggableTodoItemProps {
    itemId: number,
    index: number,
}

export const DraggableTodoItem: FunctionComponent<DraggableTodoItemProps> = (props) => {
    const {
        itemId,
        index,
    } = props

    const ref = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

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

            // Only perform the move when the mouse has crossed half of the items height
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            if (clientOffset === null) return
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(moveTodoItem({
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
