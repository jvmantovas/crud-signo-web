import React, { useRef } from "react";
import { Button, FormContainer, Input, InputArea, Label } from "./styles";

function Form({ onEdit }) {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="NOME" />
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
        <Input name="EMAIL" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="TELEFONE" type="number" />
      </InputArea>
      <Button type="submit">Continuar</Button>
    </FormContainer>
  );
}

export default Form;
