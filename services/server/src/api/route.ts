import express, {Response} from 'express'
import {addTodoItem, removeTodoItem, removeAllTodoItems, modifyTodoItem, readTodoItem, readAllTodoItems, reorderTodoItem} from '../database'
import asyncHandler from 'express-async-handler'
import {validatorFactory} from './validator'
const app = express()

app.get('/api', function (req, res) {
    res.send('Welcome to Todo REST API')
})

app.get('api/todoitems', asyncHandler(async (req, res) => {
    const items = await readAllTodoItems()
    successResult(res, items)
}))

app.get('api/todoitems/:id', asyncHandler(async (req, res) => {
    const item = await readTodoItem(parseInt(req.params.id))
    successResult(res, item)
}))

app.post('api/todoitems', asyncHandler(async (req, res) => {
    validatorFactory('item#/definitions/AddItem')(req.body)
    const id = await addTodoItem(req.body)
    successResult(res, id)
}))

app.patch('api/todoitems/:id', asyncHandler(async (req, res) => {
    const query = {
        id: req.params.id,
        ...req.body,
    }
    validatorFactory('item#/definitions/ModifyItem')(query)
    await modifyTodoItem(query)
    successResult(res)
}))

app.delete('api/todoitems/:id', asyncHandler(async (req, res) => {
    await removeTodoItem(parseInt(req.params.id))
    successResult(res)
}))

function successResult(res: Response<any>, result?: any) {
    res.json({
        code: 200,
        result: result,
    })
}
