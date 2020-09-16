import { FullTodoItem } from 'common'
import {addTodoItem, removeTodoItem, removeAllTodoItems, modifyTodoItem, readTodoItem, readAllTodoItems, reorderTodoItem} from '../database'
import {knex} from '../database/connection'

describe('Items database', () => {
    const ids: number[] = []

    const defaultItem: Pick<FullTodoItem, 'text' | 'state'> = {
        text: 'test',
        state: 'Incomplete',
    }

    beforeAll(async () => {
        await removeAllTodoItems()
    })

    afterAll(async () => {
        await removeAllTodoItems()
        knex.destroy()
    })

    test('Add item', async () => {
        const id = await addTodoItem(defaultItem)
        ids.push(id)
        expect(typeof id).toBe('number')
    })

    test('Read one item', async () => {
        const item = await readTodoItem(ids[0])
        expect(item.order).toBe(0)
    })

    test('Order increment correctly', async () => {
        const id = await addTodoItem(defaultItem)
        ids.push(id)
        const item = await readTodoItem(id)
        expect(item.order).toBe(1)
    })

    test('Read all items', async () => {
        const items = await readAllTodoItems()
        expect(items.length).toBe(ids.length)
        expect(items.map(item => item.id)).toEqual(ids)
        expect(items.map(item => item.order)).toEqual([0, 1])
    })

    test('Reorder new item', async () => {
        const id = await addTodoItem(defaultItem)
        await reorderTodoItem(id, 0)
        ids.splice(0, 0, id)
        const items = await readAllTodoItems()
        expect(items.map(item => item.id)).toEqual(ids)
    })

    test('Modify item', async () => {
        const modifiedText = 'modified'
        await modifyTodoItem({
            id: ids[0],
            text: modifiedText
        })
        const item = await readTodoItem(ids[0])
        expect(item.text).toBe(modifiedText)
    })

    test('remove item', async () => {
        await removeTodoItem(ids[0])
        ids.splice(0, 1)
        const items = await readAllTodoItems()
        expect(items.map(item => item.id)).toEqual(ids)
        expect(items.map(item => item.order)).toEqual([0, 1])
    })

    test('remove all items', async () => {
        await removeAllTodoItems()
        const items = await readAllTodoItems()
        expect(items.length).toBe(0)
    })
})
