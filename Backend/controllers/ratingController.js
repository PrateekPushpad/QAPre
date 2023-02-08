const Rating = require('../models/ratingModel');

//***  Get Rating List ***//
const getRating = async (req, res, next) => {
    Rating.find().then(result => {
        res.status(200).json({
            Rating : result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getRating }