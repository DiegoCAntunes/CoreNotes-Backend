require("express-async-errors")

const express = require('express');
const lists = require('./routes/lists.routes')

const app = express()
app.use(express.json())

app.use(lists)

const PORT = 3333;
app.listen(PORT, () => {console.log(`App is running on PORT ${PORT}`)})