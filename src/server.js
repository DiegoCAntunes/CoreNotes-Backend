require("express-async-errors")

const express = require('express');
const lists = require('./routes')
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.use(lists)

const PORT = 3333;
app.listen(PORT, () => {console.log(`App is running on PORT ${PORT}`)})