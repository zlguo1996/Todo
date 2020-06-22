export type TodoItemState = "Incomplete" | "Completed"

export interface TodoItem {
    text: string,
    state: TodoItemState,
}
