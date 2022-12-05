import React, { useEffect, useRef } from "react";
import { Button, FormContainer, Input, InputArea, Label } from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

function Form({ getUsers, onEdit, setOnEdit }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.telefone.value = onEdit.telefone;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.email.value || !user.telefone.value) {
      return toast.warn("Preencha todos os campos obrigatórios.");
    }
    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.telefone.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Endereço</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>Bairro</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>CEP</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>Cidade</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>UF</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" type="number" />
      </InputArea>
      <Button type="submit">Continuar</Button>
    </FormContainer>
  );
}

export default Form;
