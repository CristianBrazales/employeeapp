import { useEffect, useState } from "react";
import { Alert, Button, Card, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/authContext";
import { loginUser } from "../services/API";
import { MdManageAccounts } from "react-icons/md";
import { IconContext } from "react-icons";
import "../App.css";
import "../components/styles/loginPage.css";
function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValid] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { setAuthentication } = useAuth();
  const [displayAlert, setDisplayAlert] = useState(false);
  const [displayAlertMessage, setDisplayAlertMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setValid(correo !== "" && password !== "");
  }, [correo, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validForm) return;
    // API Integration  NOTE: this section can change depending on the nature of the API
    try {
      let response = await loginUser(correo, password);
      if (response.status === 200) {
        let JWT = response.data.accessToken;
        let user = response.data.user;
        // save state of the app
        setAuthentication({ JWT, user });
        // save to local storage
        localStorage.setItem("app_state", JSON.stringify({ user, JWT }));
        // reset fields
        setCorreo("");
        setPassword("");
        setSuccess(true);
        navigate("/");
      }
    } catch (err) {
      let response = err.request;
      if (response.status === 401 || response.status === 400) {
        setDisplayAlertMessage("Invalid credentials.");
      } else {
        setDisplayAlertMessage("Something went wrong, please try again later");
      }
      setSuccess(false);
      setDisplayAlert(true);
      setTimeout(() => {
        // setDisplayAlert(false);
      }, 2000);
    }
  };
  return (
    <div className="d-flex justify-content-around login-card">
      <div className="header-login display-2 fw-bold fst-italic">
        Kruger Sistema Manejo Empleados
        <div className="icon-login-page">
          <MdManageAccounts
            className="m-3"
            size={150}
            style={{ fill: "white" }}
          />
        </div>
      </div>
      <div className="inner-card ">
        <Card className="p-5">
          <Form style={{ width: "22rem" }}>
            <Form.Group className="mb-3" controlId="correo">
              <h5>Correo electronico:</h5>
              <Form.Control
                type="text"
                id="correo"
                autoComplete="off"
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <h5>Password:</h5>
              <Form.Control
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-around">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </Form>
          {displayAlert && (
            <div className="alert-login">
              <Alert className="alert-login">{displayAlertMessage}</Alert>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
