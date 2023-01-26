import db from "../config/database.js";

export async function users(req, res) {
    await db
        .collection("usuarios")
        .find()
        .toArray()
        .then((data) => {
            return res.send(data);
        })
        .catch(() => {
            res.status(500).send("Problema no servidor de banco de dados");
        });
}
