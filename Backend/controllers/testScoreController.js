const Test_Score = require('../models/testScoreModel');

//***  Get Test Score List ***//
const getTestScore = async (req, res, next) => {

    Test_Score.aggregate([
        {
            $lookup:
            {
                from: "tblstudents",
                localField: "Student_Id",
                foreignField: "Student_Id",
                as: "Student"
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
    ]).exec(function (err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
    })
}

module.exports = { getTestScore }