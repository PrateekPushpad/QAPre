const mongoose = require("mongoose");

const testAnswerSchema = new mongoose.Schema({

    Answer_Id: {
        type: Number,
        required: true
    },

    Question_Id: {
        type: Number,
        required: true
    },

    Answer: {
        type: String,
        required: true
    },

    Student_Id: {
        type: Number,
        required: true
    },

}

);


module.exports = mongoose.model('tblTestAnswer', testAnswerSchema);