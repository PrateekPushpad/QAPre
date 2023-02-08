const mongoose = require("mongoose");

const collegeMasterSchema = new mongoose.Schema({

    College_Id: {
        type:  Number,
        required: true
    },

    College_Name: {
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
});


module.exports = mongoose.model('tblCollegeMaster', collegeMasterSchema);