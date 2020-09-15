import {FullTodoItem} from 'common'
import {items} from './connection'

export async function addTodoItem(item: Omit<FullTodoItem, 'id' | 'order'>) {
    const count = await countItems()
    const ids: number[] = await items.insert({
        ...item,
        order: count,
    }, ['id'])
    return ids[0]
}

export async function removeTodoItem(id: string) {
    await items.where('id', id).del()
}

export async function modifyTodoItem(item: Partial<FullTodoItem> & Pick<FullTodoItem, 'id'>) {
    const {
        id,
        ...updates
    } = item
    await items.where('id', item.id).update(updates)
}

export async function readTodoItem(id: string) {
    const datas: FullTodoItem[] = await items.where('id', id).select('*')
    return datas[0]
}

export async function readAllTodoItems() {
    const data: FullTodoItem[] = await items.select('*')
    return data
}

export async function reorderTodoItem(id: string, targetOrder: number) {
    const currentOrder: number = (await items.where('id', id).select('order'))[0].order
    if (currentOrder < targetOrder) {
        await items.whereBetween('order', [currentOrder, targetOrder]).decrement('order', 1)
    }
    else if (currentOrder > targetOrder) {
        await items.whereBetween('order', [targetOrder, currentOrder]).increment('order', 1)
    }
    await modifyTodoItem({
        id: id,
        order: targetOrder,
    })
}

async function countItems() {
    const count = (await items.count<Record<string, number>[]>({c: 'id'}))[0].c
    return count
}
