import { Request, Response } from "express";
import { IPost } from "../types/IPost";
import { IUser } from "../types/IUser";
import Post from "../models/postModel";
import User from "../models/userModel";

interface CustomRequest extends Request {
  user?: IUser;
}

// @desc Get all posts
// @route GET /posts/
// @access Public

export const getAllPosts = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  console.log(req.user);
  const posts = await Post.find({ user: req.user?.userId })
    .populate("user", "-password")
    .exec();
  res.status(200).json(posts);
};

// @desc Create post
// @route POST /posts/
// @access Public

export const createPost = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { title, text, avatarUrl } = req.body;
  const userId = req.user?.userId;

  try {
    const post = await Post.create({
      title,
      text,
      user: userId,
      avatarUrl,
    });
    const savePost = await post.save();
    res.json(savePost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc Edit post
// @route PATCH /posts/:id
// @access Public

export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const postId = req.params.id;

  const { title, text, avatarUrl } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title,
        text,
        avatarUrl,
      },
      {
        new: true,
      }
    ).exec();

    if (!updatedPost) {
      res.status(404).json({ error: "Post not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc Delete post
// @route DELETE /posts/:id
// @access Public

export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const postId = req.params.id;

  try {
    const doc = await Post.findByIdAndDelete({ _id: postId }).exec();

    if (!doc) {
      res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Post deleted succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Can't delete this post" });
  }
};
