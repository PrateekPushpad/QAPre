const Test_Topic = require('../models/testTopicModel');

//***  Get Test Topic List ***//
const getTestTopic = async (req, res, next) => {
    Test_Topic.find().then(result => {
        res.status(200).json({
            Test_Topic: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

module.exports = { getTestTopic }