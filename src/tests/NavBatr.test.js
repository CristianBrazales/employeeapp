import { render, screen } from "@testing-library/react";
import CustomTable from "../components/Table";
import renderer from "react-test-renderer";
import { Navbar } from "react-bootstrap";
import NavBarCustom from "../components/NavBar";
test("renders our custom nav bar empty inputs", () => {
  const component = renderer.create(
    <NavBarCustom optionsList={[]} clickHanlder={() => {}}></NavBarCustom>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toEqual(
    "navbar navbar-expand navbar-dark bg-dark"
  );
});

test("renders our custom table with data", () => {
  let options = [{ name: "Panel", reference: "user" }];
  render(
    <NavBarCustom optionsList={options} clickHanlder={() => {}}></NavBarCustom>
  );
  let testingNode;
  testingNode = screen.getByText(/^Panel/i);
  expect(testingNode).not.toBeNull();
});
