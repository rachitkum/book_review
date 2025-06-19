const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/books', require('./routes/bookRoutes'));
app.use('/reviews', require('./routes/reviewRoutes'));
app.use('/users', require('./routes/userRoutes'));

module.exports = app;
