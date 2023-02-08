const mongoose = require("mongoose");

const testTopicSchema = new mongoose.Schema({

    Test_Topic_Id: {
        type: Number,
        required: true
    },

    Topic_Name: {
        type: String,
        required: true
    },
}
);
module.exports = mongoose.model('tblTestTopic', testTopicSchema);