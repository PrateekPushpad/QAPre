const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({

    Institute_Id: {
        type:  Number,
        required: true
    },

    Institute_Name: {
        type: String,
        required: true
    },

    Added_Student: {
        type:  Number,
        required: true
    },

    Approved_Student: {
        type: Number,
        required: true
    },

    Generated_Leads: {
        type: Number,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true
    },
    
});


module.exports = mongoose.model('tblInstitute', instituteSchema);