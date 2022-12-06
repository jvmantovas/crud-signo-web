import React, { useState, useEffect, useRef } from "react";
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
import emailjs from "@emailjs/browser";

function Form({ getUsers, onEdit, setOnEdit }) {
  const ref = useRef();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [distric, setDistric] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [attractions, setAttractions] = useState("");
  const [accept, setAccept] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.telefone.value = onEdit.telefone;
    }
  }, [onEdit]);

  function sendEmail() {
    const templateParams = {
      name: name,
      address: address,
      distric: distric,
      zip: zip,
      city: city,
      state: state,
      email: email,
      phone: phone,
      type: type,
      amount: amount,
      attractions: attractions,
      accept: accept,
      images: images,
    };

    emailjs
      .send(
        "service_n2z8cdm",
        "template_jrtdpnf",
        templateParams,
        "cGTn3qpuon0r7l6zF"
      )
      .then(
        (response) => {
          toast.success("E-mail de confirmação enviado!");
        },
        (err) => {
          toast.error(err);
        }
      );
  }

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
      sendEmail();
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
        <Input
          name="nome"
          type="text"
          placeholder="Nome completo"
          onChange={(e) => setName(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Endereço:</Label>
        <Input
          name="endereço"
          type="text"
          placeholder="Endereço com número e complemento"
          onChange={(e) => setAddress(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Bairro:</Label>
        <Input
          name="distric"
          type="text"
          placeholder=""
          onChange={(e) => setDistric(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>CEP:</Label>
        <Input
          name="zip"
          type="number"
          placeholder=""
          onChange={(e) => setZip(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Cidade:</Label>
        <Input
          name="city"
          type="text"
          placeholder=""
          onChange={(e) => setCity(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>UF:</Label>
        <Input
          name="state"
          type="text"
          placeholder=""
          onChange={(e) => setState(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>E-mail:</Label>
        <Input
          name="email"
          type="email"
          placeholder="exemplo@exemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Telefone:</Label>
        <Input
          name="telefone"
          type="number"
          placeholder=""
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputArea>
      <h2>DADOS PARA PRODUÇÃO</h2>
      <InputArea>
        <Label>Tipo Revistinha:</Label>
        <RadioInput
          id="convite"
          name="tipo"
          type="radio"
          value="Convite"
          onChange={(e) => setType(e.target.value)}
        />
        <RadioLabel htmlFor="convite">Convite</RadioLabel>
        <RadioInput
          id="lembranca"
          name="tipo"
          type="radio"
          value="Lembrança"
          onChange={(e) => setType(e.target.value)}
        />
        <RadioLabel htmlFor="lembranca">Lembrança</RadioLabel>
        <RadioInput
          id="convite-lembranca"
          name="tipo"
          type="radio"
          value="Convite-Lembrança"
          onChange={(e) => setType(e.target.value)}
        />
        <RadioLabel htmlFor="convite-lembranca">Convite-Lembrança</RadioLabel>
      </InputArea>
      <InputArea>
        <Label htmlFor="number">Quantidade:</Label>
        <Input
          id="number"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Atrações do evento:</Label>
        <TextArea
          name="Atrações do evento"
          rows="4"
          cols="47"
          onChange={(e) => setAttractions(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <RadioInput
          type="checkbox"
          name="Sugestões de texto para a capa"
          value="Aceito"
          onChange={(e) => setAccept(e.target.value)}
        />
        <RadioLabel>Aceito sugestões de texto para a capa</RadioLabel>
      </InputArea>
      <InputArea>
        <Label>Imagens:</Label>
        <RadioInput
          type="file"
          name="imagem[]"
          multiple="multiple"
          onChange={(e) => setImages(e.target.value)}
        />
      </InputArea>
      <Button type="submit">Continuar</Button>
    </FormContainer>
  );
}

export default Form;
