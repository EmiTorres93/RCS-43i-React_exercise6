import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useEffect, useState } from "react";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  let localStoragelistaColores = JSON.parse(
    localStorage.getItem("color") || []
  );
  const [listaColores, setListaColores] = useState(localStoragelistaColores);

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(listaColores));
  }, [listaColores]); //el State que quiero que cuando se actualice se ejecute la lógica del useEffect.

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    setColor("");
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
            placeholder="Ingrese un color en inglés. Ej: blue."
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
