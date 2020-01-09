const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewPatientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
      type: Number,
      required: true
  }
});

module.exports = NewPatient = mongoose.model("newPatient", NewPatientSchema);