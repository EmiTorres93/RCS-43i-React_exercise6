import { ListGroup, Button } from "react-bootstrap";

const ItemColor = () => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        Nombre del Color Guardado
        <Button variant="danger">Eliminar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemColor;
