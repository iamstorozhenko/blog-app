import { Router } from "express";
import {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
} from "../controller/postController";

const router: Router = Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id", updatePost);

export default router;
