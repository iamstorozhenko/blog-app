import { Router } from "express";
import { createUser, loginUser, getMe } from "../controller/userController";

const router: Router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
