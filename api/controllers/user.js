import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSET INTO usuarios(`NOME`, `EMAIL`, `TELEFONE`) VALUES(?)";

  const values = [req.body.NOME, req.body.EMAIL, req.body.TELEFONE];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Formulário enviado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `NOME` = ?, `EMAIL` = ?, `TELEFONE` = ? WHERE `ID` = ?";

  const values = [req.body.NOME, req.body.EMAIL, req.body.TELEFONE];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `ID` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário deleteado com sucesso.");
  });
};
