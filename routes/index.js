const express = require("express")
const router = express.Router();
const authController = require('../controllers/authController')

router.post('/signupDetails', authController.signupDetails);
router.get('/all-student', authController.getAllStudentData);
router.get('/view-student/:id', authController.getSingleStudentData);
router.delete('/delete-student/:id', authController.deleteStudentData);
router.post('/update-student/:id', authController.updateStudentData);

module.exports = router;
