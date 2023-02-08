const Student_Type = require('../models/studentTypeModel');

// ***  Get Student Type List *** //
const getStudentType = async (req, res, next) => {
    Student_Type.find().then(result => {
        res.status(200).json({
            Student_Type: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

// ***  Get Student Type by Student_Type_Id *** //
const getStudentTypeById = async (req, res, next) => {

    const { Student_Type_Id } = req.params;

    try {
        const type = await Student_Type.findOne({ Student_Type_Id });

        if (!type) {
            return res.status(400).json({ error: 'Student Type not found' });
        }

        res.status(200).json({
            type: "success",
            status: true,
            message: "Student Type Fetched Successfully",
            data: {
                Data: type,
            },
        });
    } catch (error) {
        return res.status(500).json({ error: 'Unable to find Student Type' });
    }
}


module.exports = { getStudentType, getStudentTypeById }