import { body } from "express-validator";

const valReview = [
    body("user_name")
    .notEmpty()
    .withMessage("user_name field is required")
    .isString()
    .withMessage("Username must be a string")
    .isLength({min:3, max:100})
    .withMessage("Username must be between 3 and 100 symbols long"),

    body("comment")
    .optional()
    .isString()
    .withMessage("Comment must be a string")
    .isLength({min: 0, max: 2000}),

    body("rating")
    .notEmpty()
    .withMessage("rating field is required")
    .isNumeric({min: 1, max: 5})
    .withMessage("Rating must be a number between 1 and 5")
];

export default valReview;