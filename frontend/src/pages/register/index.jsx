import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../styles/container";
import Title from "../../styles/title";
import Form from "../../components/Form/Form";

const Register = () => {
  const navigate = useNavigate();
  const handleClickRegistered = () => {
    navigate("/login");
  };

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
    </>
  );
};

export { Register };
