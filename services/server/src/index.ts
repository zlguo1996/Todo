// load env from .env file
import {config} from 'dotenv'
config()

// start express server
import './api/route'


import {addTodoItem, reorderTodoItem, modifyTodoItem, readAllTodoItems} from './database/operation'

async function test() {
    // const id = await addTodoItem({
    //     text: 'hello',
    //     state: 'Incomplete',
    // })

    // await modifyTodoItem({
    //     id: 8,
    //     order: 2,
    // })

    // await reorderTodoItem(8, 0)

    const items = await readAllTodoItems()
    console.log(items)
}
test()
