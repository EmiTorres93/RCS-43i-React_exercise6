import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState } from "react";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const [listaColores, setListaColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    setColor(" ");
  };

  const borrarColor = (colorBorrar) => {
    let listaColoresFiltrada = listaColores.filter(
      (colorItem) => colorItem !== colorBorrar
    );
    setListaColores(listaColoresFiltrada);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-4 d-flex justify-content-between"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese un color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaColores
        propsListaColores={listaColores}
        propsBorrarColor={borrarColor}
      ></ListaColores>
    </>
  );
};

export default FormularioColores;
