const mongoose = require("mongoose");

const appliedJobsSchema = new mongoose.Schema({

    Id: {
        type: Number,
        required: true
    },

    Student_Id: {
        type: Number,
        required: true
    },
    
    Job_Id: {
        type: Number,
        required: true
    },

    Applied_Date: {
        type: Date, 
        required: true
    },
}
);
module.exports = mongoose.model('tblAppliedJobs', appliedJobsSchema);