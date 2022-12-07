import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../styles/container";
import Title from "../../styles/title";
import Form from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";
import { Header } from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const handleClickRegistered = () => {
    navigate("/cadastros");
  };

  return (
    <>
      <Container>
        <Header>
          <Title>CADASTRAR</Title>
          <Button
            title="Ver cadastros"
            variant="secondary"
            onClick={handleClickRegistered}
          />
        </Header>
        <Form />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
    </>
  );
};

export { Register };
