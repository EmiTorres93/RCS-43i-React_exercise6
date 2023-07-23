import { ListGroup, Button, InputGroup, Form } from "react-bootstrap";

const ItemColor = ({ propsnombreColor, propsBorrarColor }) => {
  return (
    <div className="d-flex justify-content-between">
      <ListGroup.Item className="d-flex m-2 container-fluid">
        {propsnombreColor}

        <InputGroup className="mb-3 px-2 mx-2">
          <Form.Control
            className="box"
            type="color"
            value="#000000"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
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
