const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({

    Job_Post_Id: {
        type: Number,
        required: true
    },

    Job_Code: {
        type: Number,
        required: true
    },
    
    Job_Name_Id: {
        type:  Number,
        required: true
    },

    Description: {
        type: String,
        required: true
    },

    Company_Id: {
        type:  Number,
        required: true
    },

    Skills_Id: {
        type:  Number,
        required: true
    },

    No_Of_Vacancies: {
        type: Number,
        required: true
    },

    Job_Category_Id: {
        type:  Number,
        required: true
    },

    Status_Id: {
        type: Number,
        required: true
    },

});


module.exports = mongoose.model('tblJobPost', jobPostSchema);