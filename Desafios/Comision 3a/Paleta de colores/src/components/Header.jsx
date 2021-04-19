import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default function Header(props) {
  return (
    <>
      <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src={props.img}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
    </>
  );
}
