import express from "express";
import userController from "../controllers/user.js";
import authenticate from "../middileware/authenticate.js";



const router = express.Router();


//post request
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/Postjob', authenticate, userController.Postjob);
router.post('/addFirstDetails', authenticate, userController.addFirstDetails);
// router.post('/login', UserController.userLogin)
router.post('/verify', userController.verifyOTP)
//patch
router.patch('/editjobbyid', userController.editjobbyid);
router.patch('/EditfirstfrombyId', authenticate, userController.EditfirstfrombyId);


router.patch('/editProfile', authenticate, userController.editProfile);
router.post('/changeUserPassword', authenticate, userController.changeUserPassword);
router.post('/addVerificationDetails', authenticate, userController.addVerificationDetails);




//get request
router.get('/test', userController.test);
router.get('/getpostjobs', authenticate, userController.getpostjobs);
router.get('/about', authenticate, userController.about);
router.get('/getapplication', authenticate, userController.getapplication);


//delete
router.delete('/deletejobbyid/:_id', userController.deletejobbyid);

export default router