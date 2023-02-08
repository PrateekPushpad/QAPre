const JobPost = require('../models/jobPostModel');

//***  Get Job Post List ***//
const getJobPost = async (req, res, next) => {

    JobPost.aggregate([
        {
            $lookup:
            {
                from: "tbljobcategories",
                localField: "Job_Category_Id",
                foreignField: "Job_Category_Id",
                as: "Job_Category"
            }
        },
        {
            $lookup:
            {
                from: "tblcompanies",
                localField: "Company_Id",
                foreignField: "Company_Id",
                as: "Company"
            }
        },
        {
            $lookup:
            {
                from: "tbljobpositions",
                localField: "Job_Name_Id",
                foreignField: "Job_Position_Id",
                as: "Job_Name"
            }
        },
        {
            $lookup:
            {
                from: "tblstatusmasters",
                localField: "Status_Id",
                foreignField: "Status_Id",
                as: "Status"
            }
        },
        {
            $lookup:
            {
                from: "tblskillmasters",
                localField: "Skills_Id",
                foreignField: "Skills_Id",
                as: "Skills"
            }
        },
    ]).exec(function (err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
    })
}


module.exports = { getJobPost }