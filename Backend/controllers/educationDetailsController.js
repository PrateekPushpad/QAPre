const Education_Details = require('../models/educationDetailsModel');

//***  Get Education Details List ***//
const getEducationDetails = async (req, res, next) => {
    Education_Details.aggregate([
        {
            $lookup:
            {
                from: "tblratings",
                localField: "Rating_Id",
                foreignField: "Rating_Id",
                as: "Rating"
            }
        },
      ]).exec(function(err,results){
        if(err) throw err;
        console.log(results);
        res.send(results);
      })
}


module.exports = { getEducationDetails }