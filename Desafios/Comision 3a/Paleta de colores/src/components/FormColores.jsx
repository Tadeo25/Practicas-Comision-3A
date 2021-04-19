import React from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormColores() {
  return (
    <section className="p-5">
          <Card className="my-5">
        <Card.Body>
            <Card.Title>Administrar colores</Card.Title>
            <div className="d-flex justify-content-around">
                <img
                src="https://lucasrockerocp.files.wordpress.com/2013/04/fondo-azul.png"
                width="150"
                height="150"
                className="ml-5"
                />
                <Form.Control className="my-5 ml-5 mr-5" type="email" placeholder="Ingrese un color ej Blue" />
            </div>
            <Button className="my-4" variant="primary">Guardar</Button>
        </Card.Body>
      </Card>
    </section>
  );
}
