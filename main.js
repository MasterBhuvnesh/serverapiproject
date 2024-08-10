const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TeacherModel = require("./models/teacher");
const HolidayModel = require("./models/holiday");
const EmailModel = require("./models/email");
const ClassmateModel = require("./models/classmate");
const CourseModel = require("./models/course");
const TimetableModel_A1_A2 = require("./models/timetable_A1_A2");
const TimetableModel_A3_A4 = require("./models/timetable_A3_A4");
const SyallabusModel = require("./models/syallabus");

const app = express();

// Enable CORS for specific origins
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://bhuvneshverma:Verma29042005@collage.lkkh7mp.mongodb.net/sysdatabase",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Display message on main route
app.get("/", (req, res) => {
  res.send("Nice to meet you");
});

// Routes for 'teacher' collection
app.get("/teacher", (req, res) => {
  TeacherModel.find({})
    .then((teacher) => res.json(teacher))
    .catch((err) => res.json(err));
});

// Routes for 'holiday' collection
app.get("/holiday", (req, res) => {
  HolidayModel.find({})
    .then((holiday) => res.json(holiday))
    .catch((err) => res.json(err));
});

// Routes for 'email' collection
app.get("/email", (req, res) => {
  EmailModel.find({})
    .then((email) => res.json(email))
    .catch((err) => res.json(err));
});

// Routes for 'classmate' collection
app.get("/classmate", (req, res) => {
  ClassmateModel.find({})
    .then((classmate) => res.json(classmate))
    .catch((err) => res.json(err));
});

// Routes for 'course' collection
app.get("/course", (req, res) => {
  CourseModel.find({})
    .then((course) => res.json(course))
    .catch((err) => res.json(err));
});

// Routes for 'syallabus' collection
app.get("/syallabus", (req, res) => {
  SyallabusModel.find({})
    .then((syallabus) => res.json(syallabus))
    .catch((err) => res.json(err));
});

// Routes for 'timetable' collection of batch A1 & A2
app.get("/timetable/A1_A2", (req, res) => {
  TimetableModel_A1_A2.find({})
    .then((timetable) => res.json(timetable))
    .catch((err) => res.json(err));
});

// Routes for 'timetable' collection of batch A3 & A4
app.get("/timetable/A3_A4", (req, res) => {
  TimetableModel_A3_A4.find({})
    .then((timetable) => res.json(timetable))
    .catch((err) => res.json(err));
});

// RUN THE SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
