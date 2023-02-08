const Student = require('../models/studentModel');
const Counter = require('../models/counterModel');

//***  Get Student List ***//
const getStudent = async (req, res, next) => {
    Student.aggregate([
        {
            $lookup:
            {
                from: "tblskillmasters",
                localField: "Skill_Id",
                foreignField: "Skill_Id",
                as: "Skills"
            }
        },
        {
            $lookup:
            {
                from: "tbleducationdetails",
                localField: "Education_Details_Id",
                foreignField: "Education_Details_Id",
                as: "Education_Details"
            }
        },
        {
            $lookup:
            {
                from: "tblstudenttypes",
                localField: "Student_Type_Id",
                foreignField: "Student_Type_Id",
                as: "Student_Type"
            }
        },
    ]).exec(function (err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
    })
}

//*** Get Student By Student_Id ***/
const getStudentById = async (req, res, next) => {

    const { Student_Id } = req.params;

    try {
        const student = await Student.findOne({ Student_Id });

        if (!student) {
            return res.status(400).json({ error: 'Student not found' });
        }

        return res.status(200).json({
            type: "success",
            status: true,
            message: "Student Fetched Successfully",
            data: {
                Data: student,
            },
        });
    } catch (error) {
        return res.status(500).json({ error: 'Unable to find Student' });
    }
}

//*** Add Student ***/ 
const addStudent = async (req, res) => {

    try {
        const student = new Student({
           
            Student_Id: req.body.Student_Id,
            Student_Name: req.body.Student_Name,
            Skill_Id: req.body.Skill_Id,
            Education_Details_Id: req.body.Education_Details_Id,
            Student_Phone: req.body.Student_Phone,
            Student_Email: req.body.Student_Email,
            Student_DOB: req.body.Student_DOB,
            Student_Address: req.body.Student_Address,
            Status: req.body.Status,
            Resume: req.file.filename,
            Subscription: req.body.Subscription,
            Is_Active: req.body.Is_Active,
            Student_Type_Id: req.body.Student_Type_Id,

        });

        const studentData = await student.save();

        if (studentData) {
            res.status(201).json({
                type: "success",
                message: "Student has been Registered Successfully",
                data: {
                    Data: studentData,
                },
            });
            // res.render('registration', { message: "Your registration has been successfull" });
        }
        else {
            // res.render('registration', { message: "Your registration has been failed" });

        }
    }
    catch (error) {
        res.status(error.status || 500);
        res.json({
            message: error.message,
            error: error
        });
    }
}

//*** Update Student Details ***/ 
const updateStudent = (req, res) => {

    const _id = req.params.id;

    Student.findOneAndUpdate(
        { _id },
        {
            $set: {
                Student_Id: req.body.Student_Id,
                Student_Name: req.body.Student_Name,
                Skill_Id: req.body.Skill_Id,
                Education_Details_Id: req.body.Education_Details_Id,
                Student_Phone: req.body.Student_Phone,
                Student_Email: req.body.Student_Email,
                Student_DOB: req.body.Student_DOB,
                Student_Address: req.body.Student_Address,
                Status: req.body.Status,
                Resume: req.file.filename,
                Subscription: req.body.Subscription,
                Is_Active: req.body.Is_Active,
                Student_Type_Id: req.body.Student_Type_Id,
            },
        },
        { new: true },

        // res.status(201).json({
        //     type: "success",
        //     message: "Student has been Updated Successfully",
        // }),

        (err, Student) => {
            if (err) {
                res.send(err);
            } else
                res.status(201).json({
                    type: "success",
                    message: "Student has been Updated Successfully",
                    data: {
                        data: Student
                    }
                })
            //  res.json(Student);
        }
    );
};

module.exports = { getStudent, addStudent, updateStudent, getStudentById }