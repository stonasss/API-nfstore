import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;
await mongoClient.connect();
db = mongoClient.db();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor aberto");
});