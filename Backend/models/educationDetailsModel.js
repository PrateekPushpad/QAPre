const mongoose = require("mongoose");

const educationDetailsSchema = new mongoose.Schema({

    Education_Details_Id: {
        type: Number,
        required: true
    },

    UnderGrad_College_Id: {
        type: Number,
        required: true
    },

    UnderGrad_Degree_Name: {
        type: String,
        required: true
    },

    UnderGrad_Starting_Date: {
        type: Date,
        required: true
    },

    UnderGrad_Completion_Date: {
        type: Date,
        required: true
    },

    UnderGrad_Percentage: {
        type: String,
        required: true
    },

    PostGrad_College_Id: {
        type: Number,
        required: true
    },

    PostGrad_Degree_Name: {
        type: String,
        required: true
    },

    PostGrad_Starting_Date: {
        type: Date,
        required: true
    },

    PostGrad_Completion_Date: {
        type: Date,
        required: true
    },

    PostGrad_Percentage: {
        type: String,
        required: true
    },

    Rating_Id: {
        type: Number,
        required: true
    },
}
);
module.exports = mongoose.model('tblEducationDetails', educationDetailsSchema);