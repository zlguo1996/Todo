import {FullTodoItem, TodoItem} from 'common'

function addTodoItem(item: FullTodoItem) {

}

function removeTodoItem(id: string) {

}

function modifyTodoItem(item: Partial<FullTodoItem> & Pick<FullTodoItem, 'id'>) {

}

function readTodoItem(id: string): Omit<FullTodoItem, 'id'> {

}

function readAllTodoItems(): FullTodoItem[] {

}
