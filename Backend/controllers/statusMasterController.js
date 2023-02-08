const StatusMaster = require('../models/statusMasterModel');

//***  Get Status Master List ***//
const getStatusMaster = async (req, res, next) => {
    StatusMaster.find().then(result => {
        res.status(200).json({
            Status: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

//*** Get Status Master By Status_Id ***/
const getStatusById = async (req, res, next) => {

    const Status_Id = req.params

    StatusMaster.findOne(Status_Id)
        .then(result => {
            res.status(200).json({
                Status: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getStatusMaster , getStatusById }