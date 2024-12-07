const express = require('express');
const app = express();

const todosRoute = require('./routes/Todos');
app.use('/todos', todosRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`on Server ${port}`);
})