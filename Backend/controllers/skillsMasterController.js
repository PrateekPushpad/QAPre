const Skill_Master = require('../models/skillMasterModel');

//***  Get Skills Master List ***//
const getSkills = async (req, res, next) => {
    Skill_Master.find().then(result => {
        res.status(200).json({
            Skills: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getSkills }