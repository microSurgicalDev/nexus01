const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  firstName: {
      type: String,
      required: true
  },
  lastName: {
      type: String,
      required: true,
  },
  date: {
      type: String,
      required: true
  },
  slot: {
      type: String,
      required: true,
  },
  location: {
      type: String,
      required: true
  },
  phone: {
      type: Number,
      required: true
  }
});

module.exports = Appointment = mongoose.model("appointment", AppointmentSchema);
