require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const responseMw = require('./middlewares/responseMw.js')
const port = process.env.PORT || 5500;

const app = express();
global.__base = __dirname;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Db connection
require('./helpers/db')
app.get('/', (req, res) => { res.send("Hello World!") });

// routes
app.use('/todos', require('./routes/todo'))

// Pass app to the response middleware
responseMw(app)

app.listen(port, () => console.log(`Server startted at the port ${port}`))

module.exports = app
