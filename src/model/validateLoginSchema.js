import Joi from "joi";

export const authenticateSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});