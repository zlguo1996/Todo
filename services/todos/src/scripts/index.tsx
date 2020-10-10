import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import {TodoList} from './components/TodoList'
import {Background} from './components/Background'
import store from './stores/store'
import {queryTodoItems} from './stores/actions/apiActions'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Background />
            <Grid container justify="center">
                <Grid item xs={12} md={6} xl={3}>
                    <TodoList />
                </Grid>
            </Grid>
        </ThemeProvider>
    </Provider>,
    document.querySelector("#app")
);

store.dispatch(queryTodoItems())
