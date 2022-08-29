import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NavBarCustom = (props) => {
  let options = props.optionsList;
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="ms-5">
        <Navbar.Brand
          className={"fw-bold fs-3"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Bienvenido a la nave!
        </Navbar.Brand>
        <Nav className="me-auto">
          {options.map((element) => {
            return (
              <Nav.Link
                className={"fw-bold fs-4"}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/" + element.reference);
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
