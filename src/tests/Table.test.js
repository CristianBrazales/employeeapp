import { render, screen } from "@testing-library/react";
import CustomTable from "../components/Table";
import renderer from "react-test-renderer";
test("renders our custom table no inputs", () => {
  render(<CustomTable />);
  const component = renderer.create(<CustomTable></CustomTable>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toEqual("container-table");
});

test("renders our custom table with data", () => {
  let data = [
    {
      email: "admin@admin.com",
      password: "$2a$10$MeZVYPCgw3RnHcjHebTaKepnl1y9Ma5v1q9y8avHiXwOTSxRGHYda",
      nombres: "cristian Brazales",
      cedula: "0023412312",
      apellidos: "Skywalker",
      roles: ["ADMIN", "USER"],
      id: 1,
      fechaNacimiento: "2022-05-31T04:00:00.000Z",
      direccion: "",
      telefono: "1242523",
      estadoVacunacion: "true",
      tipoVacuna: "Jhonson&Jhonson",
      fechaVacuna: "2022-06-14T05:37:09.000Z",
      numeroDosis: "1",
      username: "admin@admin.com",
      direccionDomicilio: "Death star av",
      correo: "admin@admin.com",
    },
  ];

  render(<CustomTable data={data}></CustomTable>);
  let testingNode;
  testingNode = screen.getByText(/^admin@admin.com/i);
  expect(testingNode).not.toBeNull();
});
