import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import infoRouter from "./routes/infoRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use([authRouter, infoRouter])

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor aberto");
});
