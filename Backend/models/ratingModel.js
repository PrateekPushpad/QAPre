const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({

    Rating_Id: {
        type: Number,
        required: true
    },

    Rating: {
        type: String,
        required: true
    },
}
);
module.exports = mongoose.model('tblRating', ratingSchema);