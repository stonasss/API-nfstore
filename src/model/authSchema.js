import joi from "joi";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const userSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required(),
});

export const authenticateSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

export const itemSchema = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    price: joi.number().required(),
    image: joi.string().uri().required(),
    description: joi.string().required(),
    category: joi.string().required(),
});

export class AuthToken {
    constructor() {
        this.uuid = uuidv4();
        this.expire_at = dayjs().add(1, "hour").format();
    }
}
