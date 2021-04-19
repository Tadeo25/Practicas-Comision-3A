import React from "react";
import Navbar from "react-bootstrap/Navbar"
export default function Header() {
  return (
    <>
      <Navbar bg="aqua">
        <Navbar.Brand href="#home">
          <img
            src="https://i.pinimg.com/originals/34/3a/35/343a3584f3f51f679c51d53edb7fdfb1.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />{' '}
          Lista de Empleados
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
