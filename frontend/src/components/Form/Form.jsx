import React, { useEffect, useRef } from "react";
import {
  Button,
  FormContainer,
  Input,
  InputArea,
  Label,
  RadioInput,
  RadioLabel,
  TextArea,
} from "./styles";
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
    <FormContainer
      ref={ref}
      onSubmit={handleSubmit}
      enctype="multipart/form-data"
    >
      <h2>DADOS PARA ENTREGA</h2>
      <InputArea>
        <Label>Nome:</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Endereço:</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>Bairro:</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>CEP:</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>Cidade:</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>UF:</Label>
        <Input />
      </InputArea>
      <InputArea>
        <Label>E-mail:</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone:</Label>
        <Input name="telefone" type="number" />
      </InputArea>
      <h2>DADOS PARA PRODUÇÃO</h2>
      <InputArea>
        <Label>Tipo Revistinha:</Label>
        <RadioInput id="convite" name="tipo" type="radio" value="convite" />
        <RadioLabel for="convite">Convite</RadioLabel>
        <RadioInput id="lembranca" name="tipo" type="radio" value="lembranca" />
        <RadioLabel for="lembranca">Lembrança</RadioLabel>
        <RadioInput
          id="convite-lembranca"
          name="tipo"
          type="radio"
          value="convite-lembranca"
        />
        <RadioLabel for="convite-lembranca">Convite-Lembrança</RadioLabel>
      </InputArea>
      <InputArea>
        <Label>Quantidade:</Label>
        <Input type="number" />
      </InputArea>
      <InputArea>
        <Label>Atrações do evento:</Label>
        <TextArea name="Atrações do evento" rows="4" cols="47" />
      </InputArea>
      <InputArea>
        <RadioInput
          type="checkbox"
          name="Sugestões de texto para a capa"
          value="Aceito"
        />
        <RadioLabel>Aceito sugestões de texto para a capa</RadioLabel>
      </InputArea>
      <InputArea>
        <Label>Imagens:</Label>
        <RadioInput type="file" name="imagem[]" multiple="multiple" />
      </InputArea>
      <Button type="submit">Continuar</Button>
    </FormContainer>
  );
}

export default Form;
