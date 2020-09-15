export type TodoItemState = "Incomplete" | "Completed"

export interface TodoItem {
    text: string,
    state: TodoItemState,
}

export interface FullTodoItem extends TodoItem {
    id: number,
    order: number,
}
