const User = require('../models/userModel');
const { createJwtToken } = require("../utils/token.util");
const { generateOTP, fast2sms } = require("../utils/otp.util");
// const bcrypt = require("bcryptjs");


const loadRegister = async (req, res) => {
    try {
        res.render('registration', { message: "Success" });
    }
    catch (error) {
        console.log(error.message);
    }
}

// Get Users List
const getUser = async (req, res, next) => {

    User.aggregate([
        {
            $lookup:
            {
                from: "tblusertypes",
                localField: "Role_Id",
                foreignField: "Role_Id",
                as: "role"
            }
        },
    ]).exec(function (err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
    })
}

// Get User By Id
const getUserById = async (req, res, next) => {

    User.findById(req.params.id)
        .then(userFound => {
            if (!userFound) { return res.status(404).end(); }
            return res.status(201).json({
                type: "success",
                status: true,
                message: "User fetched Successfully",
                data: {
                    Data: userFound,
                },
            });
        })
        .catch(err =>
            next(err)
        );
}

// Add User
const insertUser = async (req, res) => {

    Counter.findOneAndUpdate(
        { id: "autoval" },
        { "$inc": { "seq": 1 } },
        { new: true }, (err, cd) => {

            let seqId;
            if (cd == null) {
                const newval = new counterModel({ id: "autoval", seq: 1 })
                newval.save()
                seqId = 1
            }
            else {
                seqId = cd.seq
            }
        }
    )

    try {
        const user = new User({
            User_Id: seqId,
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            image: req.file.filename,
            password: req.body.password,
            Role_Id: req.body.Role_Id,
            is_admin: 0
        });

        const userData = await user.save();

        res.status(201).json({
            type: "success",
            message: "User has been Added Successfully",
            data: {
                Data: user,
            },
        });

        if (userData) {
            res.render('registration', { message: "Your registration has been successfull" });
        }
        else {
            res.render('registration', { message: "Your registration has been failed" });

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

const updateUser = (req, res) => {

    const _id = req.params.id;

    User.findOneAndUpdate(
        { _id },
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                image: req.file.filename,
                password: req.body.password,
                is_admin: 0
            },
        },

        { new: true },

        (err, User) => {
            if (err) {
                res.send(err);
            } else
                res.status(201).json({
                    type: "success",
                    message: "User has been Updated Successfully",
                    data: {
                        data: User,
                    }
                })
        }
    );
};

// Login With Phone OTP
const loginWithPhoneOtp = async (req, res, next) => {
    try {

        const { mobile } = req.body;
        const user = await User.findOne({ mobile });

        if (!user) {
            next({ status: 400, message: "PHONE_NOT_FOUND_ERR" });
            return;
        }

        res.status(201).json({
            type: "success",
            message: "OTP sended to your registered phone number",
            data: {
                userId: user._id,
            },
        });

        // generate otp
        const otp = generateOTP(6);
        // save otp to user collection
        user.phoneOtp = otp;
        user.isAccountVerified = true;
        await user.save();
        // send otp to phone number
        await fast2sms(
            {
                message: `Your OTP is ${otp}`,
                contactNumber: user.mobile,
            },
            next
        );
    } catch (error) {
        next(error);
    }
};

// Verify Phone OTP
const verifyPhoneOtp = async (req, res, next) => {
    try {
        const { otp, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            next({ status: 400, message: "USER_NOT_FOUND_ERR" });
            return;
        }

        if (user.phoneOtp !== otp) {
            next({ status: 400, message: "Incorrect OTP" });
            return;
        }
        const token = createJwtToken({ userId: user._id });

        user.phoneOtp = "";
        await user.save();

        res.status(201).json({
            type: "success",
            message: "OTP verified successfully",
            data: {
                token,
                userId: user._id,
            },
        });
    } catch (error) {
        next(error);
    }
};

// Login with Email & Password
const login = async (req, res, next) => {

    User.findOne({
        email: req.body.email,
        password : req.body.password,
      })

      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        if (!user.password) {
          return res.status(401).send({ message: "Invalid Password!" });
        }
  
        const token = createJwtToken({ email: user.email });
  
        // req.session.token = token;
  
        res.status(200).send({
          id: user._id,
          email: user.email,
          token,
          data : User,
        });
      });


};

const logout = async ( req, res, next) => {
    try {
        req.token = null;
        return res.status(200).send({ message: "You've been signed out!" });
      } catch (err) {
        this.next(err);
      }
}

module.exports = {
    loadRegister,
    insertUser,
    getUser,
    getUserById,
    verifyPhoneOtp,
    loginWithPhoneOtp,
    updateUser,
    login,
    logout
}