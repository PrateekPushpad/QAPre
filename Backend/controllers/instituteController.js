const Institute = require('../models/instituteModel');

//***  Get Job Post List ***//
const getInstitute = async (req, res, next) => {
    Institute.find().then(result => {
        res.status(200).json({
            institute: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


module.exports = { getInstitute }