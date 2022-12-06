import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`, `endereco`, `bairro`, `cep`, `cidade`, `uf`, `email`, `telefone`, `tipo`, `quantidade`, `atracoes`, `aceita_sugestoes`, `imagens`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.endereco,
    req.body.bairro,
    req.body.cep,
    req.body.cidade,
    req.body.uf,
    req.body.email,
    req.body.telefone,
    req.body.tipo,
    req.body.quantidade,
    req.body.atracoes,
    req.body.aceita_sugestoes,
    req.body.imagens,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Formulário enviado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `endereco` = ?, `bairro` = ?, `cep` = ?, `cidade` = ?, `uf` = ?, `email` = ?, `telefone` = ?, `tipo` = ?, `quantidade` = ?, `atracoes` = ?, `aceita_sugestoes` = ?, `imagens` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.endereco,
    req.body.bairro,
    req.body.cep,
    req.body.cidade,
    req.body.uf,
    req.body.email,
    req.body.telefone,
    req.body.tipo,
    req.body.quantidade,
    req.body.atracoes,
    req.body.aceita_sugestoes,
    req.body.imagens,
  ];

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
