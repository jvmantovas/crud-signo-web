import GlobalStyle from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./styles/container";
import Title from "./styles/title";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <GlobalStyle />
    </>
  );
}

export default App;
