export type TodoItemState = "Incomplete" | "Completed"

export interface TodoItem {
    /**
     * @minLength 0
     * @maxLength 100
     */
    text: string,
    state: TodoItemState,
}

export interface FullTodoItem extends TodoItem {
    id: number,
    order: number,
}
