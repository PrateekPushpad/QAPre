const CompanyMaster = require('../models/companyMasterModel');

//***  Get Company  Master List ***//
const getCompanyMaster = async (req, res, next) => {
    CompanyMaster.find().then(result => {
        res.status(200).json({
            companyMaster: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


module.exports = { getCompanyMaster }