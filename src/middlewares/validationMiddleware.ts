import { NextFunction, Request, Response } from "express";
import { query, validationResult } from "express-validator";
import { IMAGES_FOLDER } from "../constants/constants";

// Define the validation middleware function
export const validateImageResize = () => [
  query("filename")
    .exists()
    .withMessage("file should existe ")
    .isIn(IMAGES_FOLDER)
    .withMessage(" theis file is not exist")
    .notEmpty()
    .withMessage("file should not be empty"),
  query("width")
    .exists()
    .withMessage("width  of the image is required")
    .toInt()
    .isInt({ min: 1, max: 900 })
    .withMessage("Height must be between 1 and 1000"),
  query("height")
    .exists()
    .withMessage("Height of the image is required")
    .toInt()
    .isInt({ min: 1, max: 900 })
    .withMessage("Height must be between 1 and 1000"),
];

export const validateImagePreview = () => [
  query("filename")
    .exists()
    .withMessage("file should existe ")
    .isIn(IMAGES_FOLDER)
    .withMessage(" the is file is not exist")
    .notEmpty()
    .withMessage("file should not be empty"),
];

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
