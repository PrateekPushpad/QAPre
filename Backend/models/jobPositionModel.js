const mongoose = require("mongoose");

const jobPositionSchema = new mongoose.Schema({

    Job_Position_Id: {
        type: Number,
        required: true
    },

    Job_Position: {
        type: String,
        required: true
    },
}
);
module.exports = mongoose.model('tblJobPosition', jobPositionSchema);