
require('./db/mongoose')
const express = require('express');

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express();
const port = process.env.PORT;

app.use(express.json())  // parse incoming json to an object so that we can access it in our request handlers

app.use(userRouter);
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is running at ' + port)
})

