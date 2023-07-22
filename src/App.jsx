import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioColores from "./components/FormularioColores";

function App() {
  return (
    <>
      <Container className="mainPage">
        <h1 className="text-center p-2 mb-5">Paleta de Colores</h1>
        <FormularioColores></FormularioColores>
      </Container>
      <footer className="footer text-center pt-3">
        <p>&copy, Exercise_6 Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
