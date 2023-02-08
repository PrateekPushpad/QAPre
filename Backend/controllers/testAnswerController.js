const Test_Answer = require('../models/testAnswersModel');

//***  Get Test Answer List ***//
const getTestAnswer = async (req, res, next) => {
    Test_Answer.find().then(result => {
        res.status(200).json({
            Test_Answer: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

//***  Add Test ***//   
module.exports = { getTestAnswer }