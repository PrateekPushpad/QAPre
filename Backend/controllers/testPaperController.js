const Test_Paper = require('../models/testPaperModel');

//***  Get Test Paper List ***//
const getTestPaper = async (req, res, next) => {

    Test_Paper.aggregate([
        {
            $lookup:
            {
                from: "tbltestanswers",
                localField: "Correct_Answer_Id",
                foreignField: "Answer_Id",
                as: "Correct_Answer"
            }
        },
        {
            $lookup:
            {
                from: "tbltestseries",
                localField: "Test_Series_Id",
                foreignField: "Test_Series_Id",
                as: "Test_Series"
            }
        },
        {
            $lookup:
            {
                from: "tbltestmodules",
                localField: "Test_Module_Id",
                foreignField: "Test_Module_Id",
                as: "Test_Module"
            }
        },
        {
            $lookup:
            {
                from: "tbltesttopics",
                localField: "Test_Topic_Id",
                foreignField: "Test_Topic_Id",
                as: "Test_Topic"
            }
        },
    ]).exec(function (err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
    })
}

module.exports = { getTestPaper }