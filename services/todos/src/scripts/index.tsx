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

import {tryAddItem} from 'stores/actions/apiActions'
// store.dispatch(tryAddItem('hello'))
// store.dispatch(tryAddItem('asdfa'))
// store.dispatch(tryAddItem('asdfas'))
