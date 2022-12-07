import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Checkbox,
  CheckboxInputArea,
  CheckboxLabel,
  FormContainer,
  Header,
  ImageInput,
  Input,
  InputArea,
  Label,
  RadioArea,
  RadioInput,
  RadioLabel,
  TextArea,
} from "./styles";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";

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
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);

  const brPhoneMaskProperties = {
    mask: "(99) 99999-9999",
    minLength: 14,
    beforemaskedstatechange: ({ nextState }) => {
      let { value } = nextState;

      const digits = value.replace(/\D/g, "");

      if (digits.length === 11) {
        value = digits.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      }
      return {
        ...nextState,
        value,
      };
    },
  };

  useEffect(() => {
    if (images.length < 1 || images.length > 5) return;
    const newImgUrls = [];
    images.forEach((image) => newImgUrls.push(URL.createObjectURL(image)));
    setImagesURLs(newImgUrls);
  }, [images]);

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.endereco.value = onEdit.endereco;
      user.distric.value = onEdit.distric;
      user.zip.value = onEdit.zip;
      user.city.value = onEdit.city;
      user.state.value = onEdit.state;
      user.email.value = onEdit.email;
      user.telefone.value = onEdit.telefone;
      user.tipo.value = onEdit.tipo;
      user.quantidade.value = onEdit.quantidade;
      user.atracoes.value = onEdit.atracoes;
      user.sugestoes.value = onEdit.sugestoes;
      // user.imagem.value = onEdit.imagem;
    }
  }, [onEdit]);

  const sendEmail = () => {
    const uploadedImages = () => {
      {
        imagesURLs.map((imageSrc) => (
          <img src={imageSrc} width="200px" height="200px" />
        ));
      }
    };

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
      images: uploadedImages,
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!user.nome.value || !user.email.value || !user.telefone.value) {
      return toast.warn("Preencha todos os campos obrigatórios.");
    }
    if (!regEx.test(email)) {
      return toast.warn("E-mail inválido!");
    }
    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          endereco: user.endereco.value,
          bairro: user.distric.value,
          cep: user.zip.value,
          cidade: user.city.value,
          uf: user.state.value,
          email: user.email.value,
          telefone: user.telefone.value,
          tipo: user.tipo.value,
          quantidade: user.quantidade.value,
          atracoes: user.atracoes.value,
          aceita_sugestoes: user.sugestoes.value,
          imagens: user.imagem.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
      // window.location.reload(false);
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          endereco: user.endereco.value,
          bairro: user.distric.value,
          cep: user.zip.value,
          cidade: user.city.value,
          uf: user.state.value,
          email: user.email.value,
          telefone: user.telefone.value,
          tipo: user.tipo.value,
          quantidade: user.quantidade.value,
          atracoes: user.atracoes.value,
          aceita_sugestoes: user.sugestoes.value,
          imagens: user.imagem.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
      // sendEmail();
      setImagesURLs([]);
      e.target.reset();
    }
  };

  return (
    <FormContainer
      ref={ref}
      onSubmit={handleSubmit}
      enctype="multipart/form-data"
    >
      <Header>DADOS PARA ENTREGA</Header>
      <InputArea>
        <Label>Nome*:</Label>
        <Input
          name="nome"
          type="text"
          placeholder="*Campo Obrigatório"
          onChange={(e) => setName(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Endereço:</Label>
        <Input
          name="endereco"
          type="text"
          placeholder=""
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
        <Label>E-mail*:</Label>
        <Input
          name="email"
          type="email"
          placeholder="*Campo Obrigatório"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Telefone*:</Label>
        <InputMask
          className="input"
          name="telefone"
          type="text"
          placeholder="*Campo Obrigatório"
          onChange={(e) => setPhone(e.target.value)}
          mask={brPhoneMaskProperties.mask}
        />
      </InputArea>
      <Header>DADOS PARA PRODUÇÃO</Header>
      <RadioArea>
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
      </RadioArea>
      <InputArea>
        <Label htmlFor="number">Quantidade:</Label>
        <Input
          id="number"
          name="quantidade"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </InputArea>
      <InputArea>
        <Label>Atrações do evento:</Label>
        <TextArea
          name="atracoes"
          rows="4"
          cols="47"
          onChange={(e) => setAttractions(e.target.value)}
        />
      </InputArea>
      <CheckboxInputArea>
        <Checkbox
          id="sugestoes"
          type="checkbox"
          name="sugestoes"
          value="Aceito"
          onChange={(e) => setAccept(e.target.value)}
        />
        <CheckboxLabel htmlFor="sugestoes">
          Aceito sugestões de texto para a capa
        </CheckboxLabel>
      </CheckboxInputArea>
      <InputArea>
        <Label>Imagens:</Label>
        <ImageInput
          type="file"
          name="imagem"
          multiple="multiple"
          multipleAccept="image/*"
          onChange={(e) => setImages([...e.target.files])}
        />
        {imagesURLs.map((imageSrc) => (
          <img key={imageSrc} src={imageSrc} width="20px" height="20px" />
        ))}
      </InputArea>
      <Button type="submit">Continuar</Button>
    </FormContainer>
  );
}

export default Form;
