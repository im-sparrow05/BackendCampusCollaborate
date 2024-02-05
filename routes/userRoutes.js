import { Router } from "express";
import multer from "multer";

import userController from "../controllers/userController.js";
import authMiddleWare from "../middleware/authMiddleWare.js";

const router=Router();
const storage=multer.memoryStorage();
const upload =multer();

router.get("/userById",authMiddleWare.isAuthenticated,userController.getUserById);
router.post("/addProfile",[upload.single('image'),authMiddleWare.isAuthenticated],userController.addProfile);
router.post("/changeDp",authMiddleWare.isAuthenticated,userController.changeDp);
router.post("/addSkills",authMiddleWare.isAuthenticated,userController.addSkills);
router.post("/addProject",authMiddleWare.isAuthenticated,userController.addProject);
router.post("/addCourses",authMiddleWare.isAuthenticated,userController.addCourses);

export default router;