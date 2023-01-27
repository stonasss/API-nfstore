import { signUp } from "../controller/auth.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { userSchema } from "../model/authSchema.js";
import { authenticate } from "../controller/loginAuth.js";

const authRouter = Router();

authRouter.post("/cadastro", validateSchema(userSchema), signUp);
authRouter.post("/sign-in",authenticate);

export default authRouter;
