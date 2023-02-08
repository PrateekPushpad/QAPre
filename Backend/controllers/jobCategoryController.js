const Job_Category = require('../models/jobCategoryModel');

//***  Get Job Category List ***//
const getJobCategory = async (req, res, next) => {
    Job_Category.find().then(result => {
        res.status(200).json({
            Job_Category : result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getJobCategory }