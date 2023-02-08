const College = require('../models/collegeModel');

//***  Get College List ***//
const getCollege = async (req, res, next) => {
    College.find().then(result => {
        res.status(200).json({
            college: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


module.exports = { getCollege }