const mongoose = require("mongoose");

const instituteMasterSchema = new mongoose.Schema({

    Institute_Id: {
        type:  Number,
        required: true
    },

    Institute_Name: {
        type: String,
        required: true
    },

    Institute_Address: {
        type:  String,
        required: true
    },

    Institute_URL: {
        type: String,
        required: true
    },

    Institute_Phone: {
        type: String,
        required: true
    },

    Institute_Email: {
        type:  String,
        required: true
    },

    City: {
        type: String,
        required: true
    },

    State: {
        type: Boolean,
        required: true
    },

    Postal_Code: {
        type: String,
        required: true
    },

    Institute_Head_Branch: {
        type: Boolean,
        required: true
    },

});

module.exports = mongoose.model('tblInstituteMaster', instituteMasterSchema);