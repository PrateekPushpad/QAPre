const Test_Series = require('../models/testSeriesModel');

//***  Get Test Series List ***//
const getTestSeries = async (req, res, next) => {
    Test_Series.find().then(result => {
        res.status(200).json({
            Test_Series: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getTestSeries }