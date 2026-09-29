import { StatusCodes } from 'http-status-codes';
import { registerService, loginService } from '../service/auth.service.js';

/**
 * Handles user registration requests.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @returns {Promise<void>}
 */
export const registerController = async (req, res, next) => {

  try {
     const { firstName, lastName, email, password } = req.body;
     const newUser = await registerService({
      firstName,
      lastName,
      email,
      password,
    });
    
  } catch (error) {
    next(error);
  }
};

/**
 * Handles user login requests.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @returns {Promise<void>}
 */
export const loginController = async (req, res, next) => {
// Task: Login User
  // TODO: Implement user login here.
  // Keep the existing request/response contract and pass errors to next().
  try {
    // Write the task implementation here.
  } catch (error) {
    next(error);
  }
};
