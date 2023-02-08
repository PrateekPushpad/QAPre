const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({

    collegeId: {
        type:  Number,
        required: true
    },

    collegeName: {
        type: String,
        required: true
    },

    College_Address: {
        type:  String,
        required: true
    },

    College_Url: {
        type: String,
        required: true
    },

    College_Phone: {
        type: String,
        required: true
    },

    College_Email: {
        type:  String,
        required: true
    },

    City: {
        type: String,
        required: true
    },

    State: {
        type: String,
        required: true
    },

    Postal_Code: {
        type: String,
        required: true
    },

    Head_Office: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true
    },
    
});


module.exports = mongoose.model('tblCollege', collegeSchema);