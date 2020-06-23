import {DragObjectWithType} from 'react-dnd'

export const ItemTypes = {
    TodoItem: 'todoItem',
}

export interface TodoItemType extends DragObjectWithType {
    type: typeof ItemTypes.TodoItem,
    id: string,
    index: number,
}
