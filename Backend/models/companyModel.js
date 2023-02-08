const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({

    Company_Id: {
        type:  Number,
        required: true
    },

    Company_Name: {
        type: String,
        required: true
    },
    
    Company_Phone: {
        type:  String,
        required: true
    },

    Total_leads: {
        type: Number,
        required: true
    },

    Total_Employee: {
        type:  Number,
        required: true
    },

    Total_Jobs: {
        type: Number,
        required: true
    },

    Wallet_Balance: {
        type:  Number,
        required: true
    },

    Available_Coins: {
        type: Number,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true
    },

    Hired_Employees: {
        type: Number,
        required: true
    },

});


module.exports = mongoose.model('tblCompany', companySchema);