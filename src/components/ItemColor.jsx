import { ListGroup, Button } from "react-bootstrap";

const ItemColor = ({ propsnombreColor }) => {
  return (
    <div className="d-flex justify-content-between">
      <ListGroup.Item className="d-flex container-fluid">
        {propsnombreColor}
        <div className="px-2">CajaColor</div>
      </ListGroup.Item>
      <Button variant="danger">Eliminar</Button>
    </div>
  );
};

export default ItemColor;
