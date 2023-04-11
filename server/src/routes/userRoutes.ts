import { Router } from "express";
import { createUser, loginUser, getMe } from "../controller/userController";
import protect from "../middleware/authMiddleware";

const router: Router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
