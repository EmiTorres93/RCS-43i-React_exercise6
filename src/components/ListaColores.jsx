import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ propsListaColores }) => {
  return (
    <>
      <ListGroup>
        {propsListaColores.map((color, index) => (
          <ItemColor key={index} propsnombreColor={color}></ItemColor>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaColores;
