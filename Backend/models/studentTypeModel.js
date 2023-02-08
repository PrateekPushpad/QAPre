const mongoose = require("mongoose");

const studentTypeSchema = new mongoose.Schema({

    Student_Type_Id: {
        type: Number,
        required: true
    },

    Student_Type: {
        type: String,
        required: true
    },

});


module.exports = mongoose.model('tblStudentType', studentTypeSchema);