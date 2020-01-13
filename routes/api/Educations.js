const express = require("express");
const router = express.Router();

const addEducation = require("../../models/Education");

// @route GET api/patients
// @desc Get all patients
// access PUblic

router.get("/", (req, res) => {
  addEducation.find().then(edu => res.json(edu));
});

// @route POST api/patients
// @desc post all patients
// access PUblic

router.post("/", (req, res) => {
  const addedEducation = new addEducation({
    heading: req.body.heading,
    mission: req.body.mission,
    src: req.body.src,
    why: req.body.why,
    expectation: req.body.expectation,
    payment: req.body.payment,
    next: req.body.next,
  });

  addedEducation
    .save()
    .then(edu => {
      res.json(edu);
    })
    .catch(err => console.log(err.response));
});

module.exports = router;