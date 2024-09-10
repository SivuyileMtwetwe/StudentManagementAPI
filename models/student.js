const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
  performance: [
    {
      subject: String,
      score: Number,
      date: { type: Date, default: Date.now },
    },
  ],
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
