const express = require("express");
const router = express.Router();

const addPatient = require("../../models/NewPatient");

// @route GET api/patients
// @desc Get all patients
// access PUblic

router.get("/", (req, res) => {
  addPatient.find().then(patient => res.json(patient));
});

// @route POST api/patients
// @desc post all patients
// access PUblic

router.post("/", (req, res) => {
  const addedPatient = new addPatient({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });

  addedPatient
    .save()
    .then(patient => {
      res.json(patient);
    })
    .catch(err => console.log(err.response));
});

module.exports = router;