const mongoose = require("mongoose");

const testPaperSchema = new mongoose.Schema({

    Question_Id: {
        type:  Number,
        required: true
    },

    Question: {
        type: String,
        required: true
    },

    Choice1: {
        type:  String,
        required: true
    },

    Choice2: {
        type: String,
        required: true
    },

    Choice3: {
        type: String,
        required: true
    },

    Choice4: {
        type:  String,
        required: true
    },

    Correct_Answer_Id: {
        type: Number,
        required: true
    },

    Test_Series_Id: {
        type: Number,
        required: true
    },

    Test_Module_Id: {
        type:  Number,
        required: true
    },

    Test_Topic_Id: {
        type: Number,
        required: true
    },

    Question_Marks: {
        type: Number,
        required: true
    },

});


module.exports = mongoose.model('tblTestPaper', testPaperSchema);