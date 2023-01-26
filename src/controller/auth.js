import bcrypt from "bcrypt";
import db from "../config/database.js";

export async function signUp(req, res) {
    const { username, email, password, confirmPassword } = req.body;
    const passwordHashed = bcrypt.hashSync(password, 10);

    try {
        const emailExists = await db
            .collection("usuarios")
            .findOne({ email: email });
        if (emailExists) return res.status(400).send("E-mail já cadastrado!");

        await db.collection("usuarios").insertOne({
            username,
            email,
            password: passwordHashed,
        });
        res.status(201).send("Usuário cadastrado!");
    } catch (err) {
        res.status(500).send(err.message);
    }
}