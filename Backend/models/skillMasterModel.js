const mongoose = require("mongoose");

const skillMasterSchema = new mongoose.Schema({

    Skill_Id: {
        type: Number,
        required: true
    },

    Skill_Name : {
        type: String,
        required: true
    },
}
);
module.exports = mongoose.model('tblSkillMaster', skillMasterSchema);