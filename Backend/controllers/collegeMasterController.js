const CollegeMaster = require('../models/collegeMasterModel');

//***  Get College Master List ***//
const getCollegeMaster = async (req, res, next) => {
    CollegeMaster.find().then(result => {
        res.status(200).json({
            collegeMaster: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getCollegeMaster }