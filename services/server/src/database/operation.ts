import {FullTodoItem} from 'common'
import {knex} from './connection'

const items = () => knex<FullTodoItem>('items')

export async function addTodoItem(item: Omit<FullTodoItem, 'id' | 'order'>) {
    const count = await countItems()
    const ids: number[] = await items().insert({
        ...item,
        order: count,
    }, ['id'])
    return ids[0]
}

export async function removeTodoItem(id: number) {
    const order = (await items().where('id', id).select('order'))[0].order
    await items().where('id', id).del()

    await items().whereNotBetween('order', [0, order]).decrement('order', 1)
}

export async function removeAllTodoItems() {
    await items().del()
}

export async function modifyTodoItem(item: Partial<FullTodoItem> & Pick<FullTodoItem, 'id'>) {
    const {
        id,
        ...updates
    } = item
    await items().where('id', item.id).update(updates)
}

export async function readTodoItem(id: number) {
    const datas: FullTodoItem[] = await items().where('id', id).select('*')
    return datas[0]
}

export async function readAllTodoItems() {
    const data: FullTodoItem[] = await items().orderBy('order')
    return data
}

export async function reorderTodoItem(id: number, targetOrder: number) {
    const currentOrder: number = (await items().where('id', id).select('order'))[0].order
    if (currentOrder < targetOrder) {
        await items().whereBetween('order', [currentOrder+1, targetOrder]).decrement('order', 1)
    }
    else if (currentOrder > targetOrder) {
        await items().whereBetween('order', [targetOrder, currentOrder-1]).increment('order', 1)
    }
    await modifyTodoItem({
        id: id,
        order: targetOrder,
    })
}

async function countItems() {
    const count = (await items().count<Record<string, number>[]>({c: 'id'}))[0].c
    return count
}
