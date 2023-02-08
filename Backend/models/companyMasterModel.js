const mongoose = require("mongoose");

const companyMasterSchema = new mongoose.Schema({

    Company_Id: {
        type:  Number,
        required: true
    },

    Company_Name: {
        type: String,
        required: true
    },
    
    Company_Address : {
        type:  String,
        required: true
    },

    Company_URL: {
        type: String,
        required: true
    },

    Company_Phone: {
        type:  String,
        required: true
    },

    Company_Email: {
        type: String,
        required: true
    },

    City: {
        type:  String,
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

    Company_Head_Office: {
        type: Boolean,
        required: true
    },

});


module.exports = mongoose.model('tblCompanyMaster', companyMasterSchema);