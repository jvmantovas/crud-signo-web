import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO usuarios(`nome`, `email`, `telefone`) VALUES(?)";

  const values = [req.body.nome, req.body.email, req.body.telefone];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Formulário enviado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ? WHERE `id` = ?";

  const values = [req.body.nome, req.body.email, req.body.telefone];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário deleteado com sucesso.");
  });
};
