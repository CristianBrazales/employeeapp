import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBarCustom = (props) => {
  let options = props.optionsList;
  let clickHanlder = props.clickHanlder;
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="ms-5">
        <Navbar.Brand
          className={"fw-bold fs-3"}
          onClick={(e) => {
            e.preventDefault();
            clickHanlder("/");
          }}
        >
          Bienvenido a la nave!
        </Navbar.Brand>
        <Nav className="me-auto">
          {options.map((element) => {
            return (
              <Nav.Link
                key={element.reference}
                className={"fw-bold fs-4"}
                onClick={(e) => {
                  e.preventDefault();
                  clickHanlder("/" + element.reference);
                }}
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
