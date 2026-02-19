import { Schema } from "mongoose";
export const validate = (schema) => {
  return (req, res, next) => {
    const inputs = { ...req.body, ...req.params, ...req.query };

    const { error } = schema.validate(inputs, { abortEarly: false });

    if (error) {
      const errors = error.details.map((item) => ({
        message: item.message,
        field: item.path.join("."),
      }));

      return res.status(400).json({
        status: "validation_error",
        errors,
      });
    }

    next();
  };
};

