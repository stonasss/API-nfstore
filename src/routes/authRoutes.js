import { signUp } from "../controller/auth.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { userSchema } from "../model/authSchema.js"

const authRouter = Router();
authRouter.post("/cadastro", validateSchema(userSchema), signUp);

export default authRouter;