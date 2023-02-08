const Applied_Job = require('../models/appliedjobsModel');

//***  Get Applied Job List ***//
const getAppliedJob = async (req, res, next) => {

    Applied_Job.aggregate([
        {
            $lookup:
            {
                from: "tblstudents",
                localField: "Student_Id",
                foreignField: "Student_Id",
                as: "student"
            }
        },
        {
            $lookup:
            {
                from: "tbljobposts",
                localField: "Id",
                foreignField: "Job_Post_Id",
                as: "Job_Post"
            }
        },

      ]).exec(function(err,results){
        if(err) throw err;
        console.log(results);
        res.send(results);
      })
}

module.exports = { getAppliedJob }