import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ propsListaColores, propsBorrarColor }) => {
  return (
    <>
      <ListGroup>
        {propsListaColores.map((color, index) => (
          <ItemColor
            key={index}
            propsnombreColor={color}
            propsBorrarColor={propsBorrarColor}
          ></ItemColor>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaColores;
