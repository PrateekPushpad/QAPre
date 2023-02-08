const InstituteMaster = require('../models/instituteMasterModel');

//***  Get Institute Master List ***//
const getInstituteMaster = async (req, res, next) => {
    InstituteMaster.find().then(result => {
        res.status(200).json({
            instituteMaster: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


module.exports = { getInstituteMaster }