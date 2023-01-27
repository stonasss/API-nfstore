import joi from "joi";

export const userSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required(),
});

export const itemSchema = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    price: joi.number().required(),
    image: joi.string().uri().required(),
    description: joi.string().required(),
});
