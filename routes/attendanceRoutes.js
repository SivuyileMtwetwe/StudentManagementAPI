const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/', attendanceController.signAttendance);
router.get('/', attendanceController.getAttendanceRecords);

module.exports = router;
