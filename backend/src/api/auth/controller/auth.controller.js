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
    // Destructure the request body data that comes from the frontend form
     const { firstName, lastName, email, password } = req.body;
     // Call registerService to handle the business logic and store the result in newUser
     const newUser = await registerService({
      firstName,
      lastName,
      email,
      password,
    });
    // Send the returned user data from registerService back to the frontend
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'User registered successfully.',
      user: newUser,
    });
    
  } catch (error) {
    //if there is error pass it to the the error-handler-middleware(errorHander)
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
