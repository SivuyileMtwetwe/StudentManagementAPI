const Student = require("../models/student");
const Attendance = require("../models/Attendance");
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students", error });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch student", error });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: "Failed to create student", error });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: "Failed to update student", error });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete student", error });
  }
};

exports.deleteAllStudents = async (req, res) => {
  try {
    await Student.deleteMany({});
    res.json({ message: "All students deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete students", error });
  }
};

exports.signAttendance = async (req, res) => {
  const { studentName } = req.body;
  try {
    res.json({ message: "Attendance signed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to sign attendance", error });
  }
};

exports.addPerformanceRecord = async (req, res) => {
  const { studentId, subject, score } = req.body;
  try {
    const student = await Student.findById(studentId);
    if (student) {
      student.performance.push({ subject, score });
      await student.save();
      res.json({ message: "Performance record added successfully", student });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add performance record", error });
  }
};

exports.getPerformanceRecords = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student.performance);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch performance records", error });
  }
};

exports.addPerformanceRecord = async (req, res) => {
  const { studentId, subject, score } = req.body;
  try {
    const student = await Student.findById(studentId);
    if (student) {
      student.performance.push({ subject, score });
      await student.save();
      res.json({ message: "Performance record added successfully", student });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add performance record", error });
  }
};

exports.getPerformanceRecords = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student.performance);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch performance records", error });
  }
};

exports.getStudentsForAttendance = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students", error });
  }
};

exports.submitAttendance = async (req, res) => {
  const { attendanceData } = req.body;
  try {
    for (const entry of attendanceData) {
      const { studentId, present } = entry;
      const attendance = new Attendance({
        studentName: studentId,
        attended: present,
      });
      await attendance.save();
    }
    res.json({ message: "Attendance saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save attendance", error });
  }
};

exports.markAttendance = async (req, res) => {
  try {
    const attendanceData = req.body;
    await Promise.all(
      attendanceData.map(async ({ studentId, present }) => {
        await Student.findByIdAndUpdate(studentId, { $set: { present } });
      })
    );
    res.json({ message: "Attendance marked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark attendance", error });
  }
};

exports.getPerformance = async (req, res) => {
  try {
    const students = await Student.find();
    const performanceData = students.map((student) => ({
      name: student.name,
      class: student.class,
      performance: student.performance,
    }));
    res.json(performanceData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch performance data", error });
  }
};

exports.uploadMaterial = (req, res) => {
  try {
    const material = {
      name: req.file.originalname,
      link: `/uploads/${req.file.filename}`,
    };

    res.json({ message: "Material uploaded successfully", material });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload material", error });
  }
};

exports.getReportCard = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const reportCard = {
      name: student.name,
      age: student.age,
      class: student.class,
      performance: student.performance,
    };
    res.json(reportCard);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate report card", error });
  }
};
