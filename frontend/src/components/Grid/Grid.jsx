import React from "react";
import axios from "axios";
import { Table, Tbody, Td, Th, Thead, Tr } from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { HashLink } from "react-router-hash-link";

function Grid({ users, setUsers, setOnEdit }) {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th onlyWeb>E-mail</Th>
          <Th>Telefone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="5%">{item.id}</Td>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%" onlyWeb>
              {item.email}
            </Td>
            <Td width="25%">{item.telefone}</Td>
            <Td alignCenter width="5%">
              <HashLink to="/cadastros/#edit">
                <FaEdit onClick={() => handleEdit(item)} />
              </HashLink>
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default Grid;
