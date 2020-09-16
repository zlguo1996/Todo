import express from 'express'
import {addTodoItem, removeTodoItem, removeAllTodoItems, modifyTodoItem, readTodoItem, readAllTodoItems, reorderTodoItem} from '../database'
import asyncHandler from 'express-async-handler'
import { from } from 'env-var'
import {ajv} from './validator'
const app = express()

app.get('/api', function (req, res) {
    res.send('Welcome to Todo REST API')
})

app.get('api/todoitems', asyncHandler(async (req, res) => {
    const items = await readAllTodoItems()
    res.json(items)
}))

app.get('api/todoitems/:id', asyncHandler(async (req, res) => {
    const item = await readTodoItem(parseInt(req.params.id))
    res.json(item)
}))

app.post('api/todoitems', asyncHandler(async (req, res) => {
    // ajv.validate()
    const id = await addTodoItem(req.body)
    res.json({
        id: id
    })
}))

app.patch('api/todoitems/:id', asyncHandler(async (req, res) => {

}))

app.delete('api/todoitems/:id', asyncHandler(async (req, res) => {

}))
