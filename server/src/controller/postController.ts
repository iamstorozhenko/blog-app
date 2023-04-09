import { Request, Response } from "express";

// @desc Get all posts
// @route GET /posts/
// @access Public

export const getAllPosts = async (
  req: Request,
  res: Response
): Promise<void> => {};

// @desc Create post
// @route POST /posts/
// @access Public

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {};

// @desc Edit post
// @route PATCH /posts/:id
// @access Public

export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {};

// @desc Delete post
// @route DELETE /posts/:id
// @access Public

export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {};
