import { validationResult } from "express-validator";

const validate = (req, res, next) => {
    const result = validationResult(req);
    if(!result.isEmpty()) {
        return res.status(422).json({
            errors: result,
        })
    } else {
        next();
    }
}

export default validate;