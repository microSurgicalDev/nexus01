const express = require("express");
const router = express.Router();

const Appointment = require("../../models/Appointment");

// @route GET api/patients
// @desc Get all patients
// access PUblic

router.get("/", (req, res) => {
  Appointment.find().then(appt => res.json(appt));
});

// @route POST api/patients
// @desc post all patients
// access PUblic

router.post("/", (req, res) => {
  const newAppointment = new Appointment({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    date: req.body.date,
    slot: req.body.slot,
    location: req.body.location,
    phone: req.body.phone
  });

  newAppointment
    .save()
    .then(appointment => {
      res.json(appointment);
      console.log('New appointment has been saved')
    })
    .catch(err => console.log(err));
});

module.exports = router;