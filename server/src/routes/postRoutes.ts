import { Router } from "express";
import {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
} from "../controller/postController";
import protect from "../middleware/authMiddleware";

const router: Router = Router();

router.post("/", protect, createPost);
router.get("/", protect, getAllPosts);
router.delete("/:id", protect, deletePost);
router.patch("/:id", protect, updatePost);

export default router;
