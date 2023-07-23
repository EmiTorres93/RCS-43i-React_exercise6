import { ListGroup, Button, InputGroup, Form } from "react-bootstrap";

const ItemColor = ({ propsnombreColor, propsBorrarColor }) => {
  return (
    <div className="d-flex justify-content-between">
      <ListGroup.Item className="d-flex m-2 container-fluid">
        {propsnombreColor}
        <div
          className="m-2 box"
          style={{ backgroundColor: propsnombreColor }}
        ></div>
      </ListGroup.Item>
      <Button
        className="m-2"
        variant="danger"
        onClick={() => propsBorrarColor(propsnombreColor)}
      >
        Eliminar
      </Button>
    </div>
  );
};

export default ItemColor;
