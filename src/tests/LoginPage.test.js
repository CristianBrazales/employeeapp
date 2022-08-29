import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { cleanup } from "@testing-library/react";
configure({ adapter: new Adapter() });
afterEach(cleanup);
test("renders our login page, enters some wrong data and check for output", async () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  let testingNode;
  testingNode = screen.getByText(/^Submit/i);
  expect(testingNode).not.toBeNull();

  // fill incorrect data on the form
  testingNode = screen.getByPlaceholderText("Correo electrónico");
  let testingNode2 = screen.getByPlaceholderText("Contraseña");
  fireEvent.change(testingNode, {
    target: { value: "admin" },
  });

  fireEvent.change(testingNode2, { target: { value: "secret password" } });
  // save the reminder object
  testingNode = screen.getByText(/Submit/i);
  fireEvent.click(testingNode);
  await waitFor(() => {
    expect(screen.getByText(/^Invalid credentials/i)).toBeInTheDocument();
  });
});
