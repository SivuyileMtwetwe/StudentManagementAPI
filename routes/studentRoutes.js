const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const attendanceController = require('../controllers/attendanceController');


router.get('/', studentController.getStudents);

router.get('/:id', studentController.getStudentById);

router.post('/', studentController.createStudent);

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

router.delete('/', studentController.deleteAllStudents);

// router.post('/attendance', studentController.signAttendance);
router.post('/attendance', studentController.markAttendance);

router.post('/performance', studentController.addPerformanceRecord);
router.get('/:id/performance', studentController.getPerformanceRecords);
router.get('/students', attendanceController.getStudentsForAttendance);  // Fetch students for attendance
router.post('/submit', attendanceController.submitAttendance);  // Submit attendance data

router.get('/performance', studentController.getPerformance);

router.post('/materials/upload', studentController.uploadMaterial);
router.get('/materials', studentController.getMaterials);
router.get('/:id/report', studentController.getReportCard);

module.exports = router;
