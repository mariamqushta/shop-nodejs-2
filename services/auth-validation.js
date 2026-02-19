import Joi from "joi";



export const productValidation =Joi.object({
  header: Joi.string().required(),
  type: Joi.string().optional(),
  img: Joi.string().required(),
  cost: Joi.number().required(),
  Discount: Joi.number().optional(),

})