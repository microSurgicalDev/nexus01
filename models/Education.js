const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    heading: {
        type: String,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    src: {
        type: String, 
        required: true
    },
    why: {
        type: String,
        required: true,
    },
    expectation: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    next: {
        type: String,
        required: true,
    },
    

});

module.exports = Education = mongoose.model("education", EducationSchema);
