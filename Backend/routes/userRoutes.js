const express = require("express");
const user_routes = express();
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require("path");

// Import Controllers
const userController = require("../controllers/userController");
const userTypeController = require("../controllers/userTypeController");
const collegeController = require("../controllers/collegeController");
const collegeMasterController = require("../controllers/collegeMasterController");
const jobPostController = require("../controllers/jobPostController");
const companyController = require("../controllers/companyController");
const companyMasterController = require("../controllers/companyMasterController");
const studentController = require("../controllers/studentController");
const instituteController = require("../controllers/instituteController");
const instituteMasterController = require("../controllers/instituteMasterController");
const testPaperController = require("../controllers/testPaperController");
const statusMasterController = require("../controllers/statusMasterController");
const appliedJobController = require("../controllers/appliedJobController");
const jobCategoryController = require("../controllers/jobCategoryController");
const jobPositionController = require("../controllers/jobPositionController");
const skillsMasterController = require("../controllers/skillsMasterController");
const testAnswerController = require("../controllers/testAnswerController");
const testScoreController = require("../controllers/testScoreController");
const testSeriesController = require("../controllers/testSeriesController");
const testTopicController = require("../controllers/testTopicController");
const testModuleController = require("../controllers/testModuleController");
const educationDetailsController = require("../controllers/educationDetailsController");
const studentTypeController = require("../controllers/studentTypeController");
const ratingController =  require("../controllers/ratingController");

user_routes.set('view engine', 'ejs');
user_routes.set('views', './views/users');

user_routes.use(bodyParser.json());
user_routes.use(bodyParser.urlencoded({ extended: true }))

//Image CRUD
user_routes.use(express.static('public'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/userImages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });

// APIs OF QAPreneur

// user_routes.get('/register', userController.loadRegister);
user_routes.get('/getUser', userController.getUser); // Get User List API
user_routes.get('/users/:id', userController.getUserById); // Add User List By Id API
user_routes.post('/registerwithimg', upload.single('image'), userController.insertUser); // ADD User with profile image
user_routes.put('/updateUser/:id', upload.single('image'), userController.updateUser); // Update User

user_routes.post('/login',userController.loginWithPhoneOtp); // User Login With OTP
user_routes.post('/authentication', userController.login); // User Login With Email/ Password
user_routes.post('/verify',userController.verifyPhoneOtp); // User Verify Phone OTP
user_routes.post('/logout',userController.logout); // User Signout

user_routes.get('/getUserType', userTypeController.getUserType ); // Get User Type List
user_routes.get('/tblRoles/:Role_Id', userTypeController.getUserTypeById ); // Get User Type by Role_Id

user_routes.get('/getCollege', collegeController.getCollege ); // Get College List
user_routes.get('/getCollegeMaster',collegeMasterController.getCollegeMaster ); // Get College Master List

user_routes.get('/getCompany', companyController.getCompany ); // Get Company List
user_routes.get('/getCompanyMaster',companyMasterController.getCompanyMaster ); // Get Company Master List

user_routes.get('/getStudent', studentController.getStudent ); // Get Student List
user_routes.get('/Student/:Student_Id', studentController.getStudentById ); // Get Student By Student_Id
user_routes.post('/addStudent', upload.single('Resume'), studentController.addStudent); // Register Student
user_routes.put('/updateStudent/:id', upload.single('Resume'), studentController.updateStudent); // Update Student

user_routes.get('/getStudentType', studentTypeController.getStudentType ); // Get Student Type
user_routes.get('/StudentType/:Student_Type_Id', studentTypeController.getStudentTypeById ); // Get Student Type

user_routes.get('/getInstitute', instituteController.getInstitute ); // Get Institute List
user_routes.get('/getInstituteMaster', instituteMasterController.getInstituteMaster ); // get Institute Master List

user_routes.get('/getJobPost', jobPostController.getJobPost );
user_routes.get('/getAppliedJob', appliedJobController.getAppliedJob );
user_routes.get('/getJobCategory', jobCategoryController.getJobCategory );
user_routes.get('/getJobPosition', jobPositionController.getJobPosition );

user_routes.get('/getTestPaper', testPaperController.getTestPaper );
user_routes.get('/getTestAnswer', testAnswerController.getTestAnswer );
user_routes.get('/getTestScore', testScoreController.getTestScore );
user_routes.get('/getTestSeries', testSeriesController.getTestSeries );
user_routes.get('/getTestTopic', testTopicController.getTestTopic );
user_routes.get('/getTestModule', testModuleController.getTestModule );

user_routes.get('/getEducationDetails', educationDetailsController.getEducationDetails );
user_routes.get('/getSkills', skillsMasterController.getSkills );
user_routes.get('/getRating', ratingController.getRating );
user_routes.get('/getStatusMaster', statusMasterController.getStatusMaster );


module.exports = user_routes;