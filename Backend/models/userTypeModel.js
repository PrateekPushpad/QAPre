const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema({

    Role_Id: {
        type:  Number,
        required: true
    },

    Role: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('tblUserType', userTypeSchema);