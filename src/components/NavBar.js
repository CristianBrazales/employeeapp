import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const NavBarCustom = (props) => {
  let options = props.optionsList;

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="ms-5">
        <Navbar.Brand href="/" className={"fw-bold fs-3"}>
          Bienvenido a la nave!
        </Navbar.Brand>
        <Nav className="me-auto">
          {options.map((element) => {
            return (
              <Nav.Link
                href={"/" + element.reference}
                className={"fw-bold fs-4"}
              >
                {element.name}
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBarCustom;
