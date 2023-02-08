const mongoose = require("mongoose");

const testScoreSchema = new mongoose.Schema({

    Score_Id: {
        type: Number,
        required: true
    },

    Student_Id: {
        type: Number,
        required: true
    },

    Score: {
        type: Number,
        required: true
    },

    Test_Series_Id: {
        type: Number,
        required: true
    },

    No_Of_Attempt: {
        type: Number,
        required: true
    },
}

);


module.exports = mongoose.model('tblTestScore', testScoreSchema);