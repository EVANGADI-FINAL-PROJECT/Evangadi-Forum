import { body } from "express-validator";
import { validationErrorHandler } from "../../../middleware/validation-handler.js";

// Task: Register User
// TODO: Add the registration validation rules here.
export const registerValidation = [
  validationErrorHandler,
];

// Task: Login User
// TODO: Add the login validation rules here.
export const loginValidation = [
  validationErrorHandler,
];
