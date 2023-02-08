const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    Student_Id: {
        type:  Number,
        required: true,
        unique: true,
    },

    Student_Name: {
        type: String,
        required: true
    },

    Skill_Id: {
        type:  Array,
        required: true
    },

    Education_Details_Id: {
        type: Number,
        required: true
    },

    Student_Phone: {
        type: String,
        required: true, 
        unique: true 
    },

    Student_Email: {
        type: String,
        required: true
    },

    Student_DOB: {
        type:  Date,
        required: true
    },

    Student_Address: {
        type:  String,
        required: true
    },

    Status: {
        type: Boolean,
        required: true
    },

    Resume: {
        type: String,
        required: true
    },

    Subscription: {
        type:  Boolean,
        required: true
    },

    Is_Active: {
        type: Boolean,
        required: true
    },

    Student_Type_Id: {
        type: Number,
        required: true
    },
});


module.exports = mongoose.model('tblStudent', studentSchema);