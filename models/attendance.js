const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    attended: { type: Boolean, default: true }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);
module.exports = Attendance;
