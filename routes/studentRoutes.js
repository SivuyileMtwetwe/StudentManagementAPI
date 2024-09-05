const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getStudents);

router.get('/:id', studentController.getStudentById);

router.post('/', studentController.createStudent);

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

router.delete('/', studentController.deleteAllStudents);

router.post('/attendance', studentController.signAttendance);

router.post('/performance', studentController.addPerformanceRecord);
router.get('/:id/performance', studentController.getPerformanceRecords);


module.exports = router;
