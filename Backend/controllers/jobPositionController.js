const Job_Position = require('../models/jobPositionModel');

//***  Get Job Position List ***//
const getJobPosition = async (req, res, next) => {
    Job_Position.find().then(result => {
        res.status(200).json({
            Job_Position: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getJobPosition }