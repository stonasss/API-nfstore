import * as bcrypt from 'bcrypt';
import db from "../config/database.js";
import { validateSchema } from '../middleware/validateSchema.js';
import { authenticateSchema } from '../model/validateLoginSchema.js';
import { AuthToken } from '../model/authToken.js'

export async function authenticate (req, res) {
    const { email, senha, error } = req.body;
    if (error) return res.status(422).send(error);
    try {
        //checando se existe o usuario com aquele email
      const user = await db.collection("usuarios").findOne({email:email});  
      if (!user) return res.status(400).send(`problema no email ${email}`);
        //checando se as senhas batem
      const matchPasswords = await bcrypt.compare(senha, user.password);
      if (!matchPasswords) return res.status(400).send('senha inválidos');
        //criando um novo token
      const token = new AuthToken();
        //atualizando sessions no banco de daddos
      await db.collection("sessions").updateOne({
        user_id: user._id
      }, {
        $set: {
          user_id: user._id,
          token: token.uuid,
          expire_at: token.expire_at
        }
      }, { upsert: true });
  
      return res.send({
        token: token.uuid,
        expire_at: token.expire_at,
        user: {
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  }