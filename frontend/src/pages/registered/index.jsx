import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../styles/container";
import Title from "../../styles/title";
import Form from "../../components/Form/Form";
import Grid from "../../components/Grid/Grid";
import { useNavigate } from "react-router-dom";
import { Header } from "../Register/styles";
import { Button } from "../../components/Button/Button";

const Registered = () => {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const navigate = useNavigate();
  const handleClickRegister = () => {
    navigate("/");
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Header>
          <Title>CADASTROS</Title>
          <Button
            title="Voltar"
            variant="secondary"
            onClick={handleClickRegister}
          />
        </Header>
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
        <Title id="edit">EDITAR CADASTRO</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
    </>
  );
};

export { Registered };
