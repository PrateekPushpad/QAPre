const mongoose = require("mongoose");

const testSeriesSchema = new mongoose.Schema({

    Test_Series_Id: {
        type: Number,
        required: true
    },

    Test_Series_Name: {
        type: String,
        required: true
    },
}
);
module.exports = mongoose.model('tblTestSeries', testSeriesSchema);