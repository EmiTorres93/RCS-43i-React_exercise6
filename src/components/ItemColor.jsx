import { ListGroup, Button } from "react-bootstrap";

const ItemColor = () => {
  return (
    <div className="d-flex justify-content-between">
      <ListGroup.Item className="d-flex container-fluid">
        Nombre del Color Guardado
        <div className="px-2">CajaColor</div>
      </ListGroup.Item>
      <Button variant="danger">Eliminar</Button>
    </div>
  );
};

export default ItemColor;
