const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

connectDB();

app.use(express.json());

const cors = require('cors');
app.use(cors());


app.use('/students', studentRoutes);

module.exports = app;
