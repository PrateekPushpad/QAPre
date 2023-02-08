const Company = require('../models/companyModel');

//***  Get Company List ***//
const getCompany = async (req, res, next) => {
    Company.find().then(result => {
        res.status(200).json({
            company: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


module.exports = { getCompany }