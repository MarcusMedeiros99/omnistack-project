const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(routes);

app.listen(3333);