const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const attendanceController = require("../controllers/attendanceController");

router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudentById);
router.get("/:id/performance", studentController.getPerformanceRecords);
router.get("/students", attendanceController.getStudentsForAttendance);
router.get("/performance", studentController.getPerformance);
router.get("/materials", studentController.getMaterials);
router.get("/:id/report", studentController.getReportCard);

router.post("/performance", studentController.addPerformanceRecord);
router.post("/submit", attendanceController.submitAttendance);
router.post("/attendance", studentController.signAttendance);
router.post("/attendance", studentController.markAttendance);
router.post("/", studentController.createStudent);
router.post("/materials/upload", studentController.uploadMaterial);

router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);
router.delete("/", studentController.deleteAllStudents);

module.exports = router;
