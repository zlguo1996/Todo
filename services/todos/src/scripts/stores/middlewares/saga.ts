import {readAllTodoItems, addTodoItem, removeTodoItem, modifyTodoItem} from '../../apis/todo'
import {call, put, all, takeEvery, debounce} from 'redux-saga/effects'
import {updateTodoItems} from '../actions/todoActions'
import {AddTodoItemAction, ModifyTodoItemAction, RemoveTodoItemAction, MoveTodoItemAction} from '../actions/apiActions'
import {ADD_TODO_ITEM, MODIFY_TODO_ITEM, MOVE_TODO_ITEM, QUERY_TODO_ITEMS, REMOVE_TODO_ITEM} from '../actions/types'
import createSageMiddleware from 'redux-saga'


type PromiseReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer P> ? P : never

// effects

function* queryTodo() {
    const items: PromiseReturnType<typeof readAllTodoItems> = yield call(readAllTodoItems)
    yield put(updateTodoItems({
        items
    }))
}

function* addTodo(action: AddTodoItemAction) {
    console.log('add item')
    const {
        type,
        ...item
    } = action
    yield call(addTodoItem, item)
    yield* queryTodo()
}

function* removeTodo(action: RemoveTodoItemAction) {
    yield call(removeTodoItem, action.id)
    yield* queryTodo()
}

function* modifyTodo(action: ModifyTodoItemAction) {
    yield call(modifyTodoItem, {
        id: action.id,
        ...action.item
    })
    yield* queryTodo()
}

function* moveTodo(action: MoveTodoItemAction) {
    yield call(modifyTodoItem, {
        id: action.id,
        order: action.targetIndex,
    })
    yield* queryTodo()
}

// watches

function* watchQueryTodoItems() {
    yield takeEvery(QUERY_TODO_ITEMS, queryTodo)
}

function* watchAddTodoItem() {
    console.log('watch', ADD_TODO_ITEM)
    yield takeEvery(ADD_TODO_ITEM, addTodo)
}

function* watchRemoveTodoItem() {
    yield takeEvery(REMOVE_TODO_ITEM, removeTodo)
}

function* watchModifyTodoItem() {
    yield debounce(1000, MODIFY_TODO_ITEM, modifyTodo)
}

function* watchMoveTodoItem() {
    yield debounce(1000, MOVE_TODO_ITEM, moveTodo)
}

// root

export function* rootSaga() {
    yield all([
        watchQueryTodoItems(),
        watchRemoveTodoItem(),
        watchAddTodoItem(),
        watchMoveTodoItem(),
        watchModifyTodoItem(),
    ])
}

// middleware

export const sagaMiddleware = createSageMiddleware()
