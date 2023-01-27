import db from "../config/database.js";

export async function newProduct(req, res) {
    const { title, subtitle, price, image, description } = req.body;

    try {
        const productExists = await db
            .collection("products")
            .findOne({ title: title });
        if (productExists) return res.status(400).send("Produto já existe!");

        await db.collection("products").insertOne({
            title,
            subtitle,
            price,
            image,
            description,
        });
        res.status(201).send("Produto cadastrado!");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function products(req, res) {
    await db
        .collection("products")
        .find()
        .toArray()
        .then((data) => {
            return res.send(data);
        })
        .catch(() => {
            res.status(500).send("Problema no servidor de banco de dados");
        });
}
