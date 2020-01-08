const express = require("express");
const router = express.Router();

const Patient = require("../../models/Patient");

// @route GET api/patients
// @desc Get all patients
// access PUblic

router.get("/", (req, res) => {
  Patient.find().then(patient => res.json(patient));
});

// @route POST api/patients
// @desc post all patients
// access PUblic

router.post("/", (req, res) => {
  const newPatient = new Patient({
    name: req.body.name,
    age: req.body.age
  });

  newPatient
    .save()
    .then(patient => {
      res.json(patient);
    })
    .catch(err => console.log(err.response));
});

module.exports = router;
