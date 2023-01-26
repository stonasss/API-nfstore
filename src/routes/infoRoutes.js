import { users } from "../controller/generalInfo.js";
import { Router } from "express";

const infoRouter = Router();

infoRouter.get("/usuarios", users);

export default infoRouter;
