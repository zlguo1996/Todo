import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {TodoList} from './components/TodoList'
import {Background} from './components/Background'
import store from './stores/store'
import {queryTodoItems} from './stores/actions/apiActions'

ReactDOM.render(
    <Provider store={store}>
        <Background />
        <TodoList />
    </Provider>,
    document.querySelector("#app")
);

store.dispatch(queryTodoItems())
