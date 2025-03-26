import { validationResult } from "express-validator";

const validate = (req, res, next) => {
    let errors;
  try {
    errors = validationResult(req).throw();
    next();
  } catch (err) {
    return res.status(422).json({
      errors: result,
    });
  }
};

export default validate;
