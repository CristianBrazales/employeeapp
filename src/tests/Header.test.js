import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../components/Header";
test("renders our custom header empty inputs", () => {
  const component = renderer.create(<Header></Header>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toEqual("full-window");
});

test("renders our custom header with data and make sure it renders", () => {
  render(<Header allUsers={[]} setUsers={() => {}}></Header>);
  let testingNode;
  testingNode = screen.getByText(/^Lista de empleados/i);
  expect(testingNode).not.toBeNull();
});
