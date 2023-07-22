import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  return (
    <>
      <Form>
        <Form.Group
          className="mb-4 d-flex justify-content-between"
          controlId="formBasicEmail"
        >
          <Form.Control required type="text" placeholder="Ingrese un color" />
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaColores></ListaColores>
    </>
  );
};

export default FormularioColores;
