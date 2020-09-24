// load env from .env file
import {config} from 'dotenv'
config()

// start express server
import app from './api/route'
const port = 8000
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`)
})

// clear database
import {removeAllTodoItems} from './database'
removeAllTodoItems().then(() => console.log('Todo items in database all cleared'))
