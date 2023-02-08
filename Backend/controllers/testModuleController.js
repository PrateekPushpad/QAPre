const Test_Module = require('../models/testModuleModel');

// Get Test Module List
const getTestModule = async (req, res, next) => {
    Test_Module.find().then(result => {
        res.status(200).json({
            Test_Module: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getTestModule }