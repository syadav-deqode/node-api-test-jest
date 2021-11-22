require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 5500;

const app = express();
global.__base = __dirname;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server startted at the port ${port}`))

module.exports = app
