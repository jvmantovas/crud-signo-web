import React from "react";
import axios from "axios";
import { Table, Tbody, Td, Th, Thead, Tr } from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

function Grid({ users }) {
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
            <Td width="30%">{item.ID}</Td>
            <Td width="30%">{item.NOME}</Td>
            <Td width="30%" onlyWeb>
              {item.EMAIL}
            </Td>
            <Td width="20%">{item.TELEFONE}</Td>
            <Td alignCenter width="5%">
              <FaEdit />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.ID)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default Grid;
