import {config} from '../config'
import axios from 'axios'
import {FullTodoItem, AddItem, ModifyItem} from 'common'

const rootPath = `http://${config.serverIp}:8000/api/todoitems`

export async function readAllTodoItems() {
    const path = rootPath
    const res: FullTodoItem[] = (await axios.get(path)).data.result
    return res
}

export async function addTodoItem(item: AddItem) {
    const path = rootPath
    const id: number = (await axios.post(path, item)).data.result
    return id
}

export async function removeTodoItem(id: number) {
    const path = `${rootPath}/${id}`
    await axios.delete(path)
}

export async function modifyTodoItem(item: ModifyItem) {
    const {
        id,
        ...query
    } = item
    const path = `${rootPath}/${id}`
    await axios.patch(path, query)
}
