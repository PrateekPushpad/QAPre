const mongoose = require("mongoose");

const jobCategorySchema = new mongoose.Schema({

    Job_Category_Id: {
        type: Number,
        required: true
    },

    Category: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    },
}
);
module.exports = mongoose.model('tblJobCategory', jobCategorySchema);