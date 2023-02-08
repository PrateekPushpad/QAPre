const mongoose = require("mongoose");

const statusMasterSchema = new mongoose.Schema({

    Status_Id: {
        type:  Number,
        required: true
    },

    Status: {
        type: String,
        required: true
    },
    
});


module.exports = mongoose.model('tblStatusMaster', statusMasterSchema);