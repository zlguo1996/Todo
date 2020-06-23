import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {TodoList} from './components/TodoList'
import {Background} from './components/Background'
import store from './stores/store'

ReactDOM.render(
    <Provider store={store}>
        <Background />
        <TodoList />
    </Provider>,
    document.querySelector("#app")
);

import {addTodoItem} from 'stores/actions/todoActions'
store.dispatch(addTodoItem('hello'))
store.dispatch(addTodoItem('asdfa'))
store.dispatch(addTodoItem('asdfas'))
