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
exports.getMe = exports.loginUser = exports.createUser = void 0;
// @desc Create new user
// @route POST /users/register
// @access Public
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.createUser = createUser;
// @desc Login user
// @route POST /users/login
// @access Public
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.loginUser = loginUser;
// @desc Get my info
// @route POST /me
// @access Public
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getMe = getMe;
