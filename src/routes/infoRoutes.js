import { users } from "../controller/generalInfo.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { itemSchema } from "../model/authSchema.js";
import { newProduct, products } from "../controller/products.js";

const infoRouter = Router();

infoRouter.get("/usuarios", users);
infoRouter.get("/produtos", products);
infoRouter.post("/produtos", validateSchema(itemSchema), newProduct);

export default infoRouter;
