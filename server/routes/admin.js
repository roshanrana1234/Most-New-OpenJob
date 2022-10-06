

import express from "express";
import adminController from "../controllers/admin.js";
import authenticate from "../middileware/adminAuthenticate.js";



const router = express.Router();

// router.get('/getjobRole', adminController.getjobRole);
router.post('/admin/register', adminController.register);
router.post('/admin/login', adminController.login);
router.patch('/admin/Activatejob/:_id', authenticate, adminController.Activatejob);
//get request
router.get('/admin/about', authenticate, adminController.about);
router.get('/admin/getjobs', authenticate, adminController.getjobs);
router.get('/citylist', adminController.citylist);
router.get('/statelist', adminController.statelist);

router.get('/getUnderReviewjobs', authenticate, adminController.getUnderReviewjobs);
router.get('/getActivejobs', authenticate, adminController.getActivejobs);



export default router;