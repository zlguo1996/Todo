// load env from .env file
import {config} from 'dotenv'
config()

// start express server
import './api/route'


import {addTodoItem} from './database/operation'

async function test() {
    const id = await addTodoItem({
        text: 'hello world',
        state: 'Incomplete',
    })
}
test()
