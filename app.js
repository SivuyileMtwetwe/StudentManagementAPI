const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

connectDB();

app.use(express.json());

const cors = require('cors');
app.use(cors());

const attendanceRoutes = require('./routes/attendanceRoutes');
app.use('/attendance', attendanceRoutes);

const materialRoutes = require('./routes/materialRoutes');
app.use('/materials', materialRoutes);


app.use('/students', studentRoutes);

const notificationRoutes = require('./routes/notificationRoutes');
app.use('/notifications', notificationRoutes);

app.use('/uploads', express.static('uploads'));


module.exports = app;
