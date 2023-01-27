import { signUp, authenticate } from "../controller/Auth.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { userSchema } from "../model/authSchema.js";

const authRouter = Router();

authRouter.post("/cadastro", validateSchema(userSchema), signUp);
authRouter.post("/sign-in", authenticate);

export default authRouter;
