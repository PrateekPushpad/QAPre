const mongoose = require("mongoose");

const testModuleSchema = new mongoose.Schema({

    Test_Module_Id: {
        type: Number,
        required: true
    },

    Test_Module_Name: {
        type: String,
        required: true
    },
}
);
module.exports = mongoose.model('tblTestModule', testModuleSchema);