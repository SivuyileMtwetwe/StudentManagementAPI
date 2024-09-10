const Attendance = require("../models/Attendance");

exports.signAttendance = async (req, res) => {
  const { studentName } = req.body;
  try {
    const attendance = new Attendance({ studentName });
    await attendance.save();
    res.json({ message: "Attendance signed successfully", attendance });
  } catch (error) {
    res.status(500).json({ message: "Failed to sign attendance", error });
  }
};

exports.getAttendanceRecords = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.json(records);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch attendance records", error });
  }
};
