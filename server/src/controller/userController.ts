import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// @desc Create new user
// @route POST /users/register
// @access Public

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {};

// @desc Login user
// @route POST /users/login
// @access Public

export const loginUser = async (
  req: Request,
  res: Response
): Promise<void> => {};

// @desc Get my info
// @route POST /me
// @access Public

export const getMe = async (req: Request, res: Response): Promise<void> => {};
