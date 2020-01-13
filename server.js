const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const patients = require("./routes/api/Patients");
const appointmentRoute = require('./routes/api/Appointments');
const addPatients = require('./routes/api/AddPatients')
const education = require('./routes/api/Educations');


const app = express();

const db = require("./config/keys").mongoURI;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.use("/api/patients", patients);
app.use('/api/appointments', appointmentRoute);
app.use('/api/addPatients', addPatients);
app.use('/api/education', education);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
