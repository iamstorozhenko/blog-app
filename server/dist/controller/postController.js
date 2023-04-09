"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getAllPosts = void 0;
// @desc Get all posts
// @route GET /posts/
// @access Public
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAllPosts = getAllPosts;
// @desc Create post
// @route POST /posts/
// @access Public
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.createPost = createPost;
// @desc Edit post
// @route PATCH /posts/:id
// @access Public
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updatePost = updatePost;
// @desc Delete post
// @route DELETE /posts/:id
// @access Public
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deletePost = deletePost;
