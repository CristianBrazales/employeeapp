import { XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { FiSave } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "../components/styles/userPage.css";
import "react-datepicker/dist/react-datepicker.css";
import NavBarCustom from "../components/NavBar";
import useAuth from "../context/authContext";
import { getUserInfo, updateUser } from "../services/API";
import { generateOptionNavBar } from "../utils";

function UserPage() {
  const { authentication } = useAuth();
  let currentUser = authentication.user;

  let optionsNavbar = generateOptionNavBar(currentUser?.roles);

  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [direccionDomicilio, setDireccionDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estadoVacunacion, setEstadoVacunacion] = useState(false);
  const [tipoVacuna, setTipoVacuna] = useState("");
  const [numeroDosis, setNumeroDosis] = useState(0);
  const [fechaVacuna, setFechaVacuna] = useState(new Date());

  const [displayAlert, setDisplayAlert] = useState(false);
  const [displayAlertMessage, setDisplayAlertMessage] = useState("");

  const setAllStates = (
    fechaNacimiento = new Date(),
    direccionDomicilio = "",
    telefono = "",
    estadoVacunacion = false,
    tipoVacuna = "",
    numeroDosis = "",
    fechaVacuna = new Date()
  ) => {
    setFechaNacimiento(fechaNacimiento);
    setDireccionDomicilio(direccionDomicilio);
    setTelefono(telefono);
    setEstadoVacunacion(estadoVacunacion);
    setTipoVacuna(tipoVacuna);
    setNumeroDosis(numeroDosis);
    setFechaVacuna(fechaVacuna);
  };

  useEffect(() => {
    (async () => {
      let user = await getUserInfo(currentUser.id);
      console.log(user);
      setAllStates(
        new Date(user.fechaNacimiento),
        user.direccionDomicilio,
        user.telefono,
        user.estadoVacunacion,
        user.tipoVacuna,
        user.numeroDosis,
        user.fechaVacuna === "" ? new Date() : new Date(user.fechaVacuna)
      );
    })();
  }, []);

  const handleChange = (e, callback) => {
    callback(e.target.value);
  };

  // submit handler
  const onSubmit = async () => {
    let response = await updateUser(currentUser.id, {
      fechaNacimiento,
      direccionDomicilio,
      telefono,
      estadoVacunacion,
      tipoVacuna,
      numeroDosis,
      fechaVacuna,
    });

    if (response.status === 200) {
      setDisplayAlert(true);
      setDisplayAlertMessage("Usuario actualizado correctamente");
      setTimeout(() => {
        setDisplayAlert(false);
      }, 2000);
    } else {
      setDisplayAlert(true);
      setDisplayAlertMessage("Un error ocurrio, intentalo mas tarde");
      setTimeout(() => {
        setDisplayAlert(false);
      }, 2000);
    }
  };

  return (
    <div>
      <NavBarCustom optionsList={optionsNavbar}></NavBarCustom>
      <div className="center-main-container">
        <div className="main-container-user">
          {displayAlert && (
            <div className="alert-custom">
              <Alert className="alert-custom">{displayAlertMessage}</Alert>
            </div>
          )}

          <h3 className="title">Editar mi informacion</h3>
          <div className="float-container-form display-flex-center ">
            <div className="float-child-form">
              <span className="texto-form display-flex-center t" id="nombre">
                Fecha de nacimiento:
              </span>
              <span className="input-form">
                <DatePicker
                  className="text-center"
                  selected={fechaNacimiento}
                  onChange={(date) => setFechaNacimiento(date)}
                />
              </span>
            </div>
            <div className="float-child-form">
              <span className="texto-form display-flex-center" id="nombre">
                Direccion domicilio:
              </span>
              <input
                className="input-form"
                value={direccionDomicilio}
                onChange={(e) => {
                  handleChange(e, setDireccionDomicilio);
                }}
                required={true}
              ></input>
            </div>
          </div>
          <div className="float-container-form display-flex-center ">
            <div className="float-child-form">
              <span className="texto-form display-flex-center" id="nombre">
                Telefono:
              </span>
              <input
                className="input-form"
                value={telefono}
                onChange={(e) => {
                  handleChange(e, setTelefono);
                }}
                required={true}
              ></input>
            </div>
            <div className="float-child-form">
              <span className="texto-form display-flex-center" id="nombre">
                Estado de vacunación:
              </span>
              <span className="input-form">
                <Form.Select
                  aria-label="Default select example"
                  value={estadoVacunacion}
                  onChange={(e) => {
                    handleChange(e, setEstadoVacunacion);
                  }}
                >
                  <option>Seleccione</option>
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </Form.Select>
              </span>
            </div>
          </div>
          {estadoVacunacion === "true" ? (
            <div>
              <div className="float-container-form display-flex-center ">
                <div className="float-child-form">
                  <span className="texto-form display-flex-center" id="nombre">
                    Numero de dosis:
                  </span>

                  <input
                    className="input-form"
                    value={numeroDosis}
                    onChange={(e) => {
                      handleChange(e, setNumeroDosis);
                    }}
                    required={true}
                  ></input>
                </div>
                <div className="float-child-form">
                  <span className="texto-form display-flex-center" id="nombre">
                    Tipo de Vacuna:
                  </span>
                  <span className="input-form">
                    <Form.Select
                      aria-label="Default select example"
                      value={tipoVacuna}
                      onChange={(e) => {
                        handleChange(e, setTipoVacuna);
                      }}
                    >
                      <option value={""}>Seleccione una:</option>
                      <option value={"Sputnik"}>Sputnik</option>
                      <option value={"AstraZeneca"}>AstraZeneca</option>
                      <option value={"Pfizer"}>Pfizer</option>
                      <option value={"Jhonson&Jhonson"}>Jhonson&Jhonson</option>
                    </Form.Select>
                  </span>
                </div>
              </div>
              <div className="float-container-form display-flex-center ">
                <div className="float-child-form">
                  <span
                    className="texto-form display-flex-center t"
                    id="nombre"
                  >
                    Fecha de Vacunacion:
                  </span>
                  <span className="input-form">
                    <DatePicker
                      className="text-center"
                      selected={fechaVacuna}
                      onChange={(date) => setFechaVacuna(date)}
                    />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="button-container">
            <button className="button-form" onClick={onSubmit}>
              <FiSave className="icon-form"></FiSave> Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
