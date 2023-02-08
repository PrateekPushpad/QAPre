const Role = require('../models/userTypeModel');

//***  Get Role List ***//
const getUserType = async (req, res, next) => {
    Role.find().then(result => {
        res.status(200).json({
            role: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

//*** Get UserType By RoleId ***/
const getUserTypeById = async (req, res, next) => {

    const { Role_Id } = req.params;

    try {
        const role = await Role.findOne({ Role_Id });

        if (!role) {
            return res.status(400).json({ error: 'Role not found' });
        }

        res.status(200).json({
            type: "success",
            status: true,
            message: "User Type Fetched Successfully",
            data: {
                Data: role,
            },
        });
    } catch (error) {
        return res.status(500).json({ error: 'Unable to find Role' });
    }
}

module.exports = { getUserType, getUserTypeById }