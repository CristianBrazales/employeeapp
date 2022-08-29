import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./styles/header.css";
import DatePicker from "react-datepicker";
function Header(props) {
  const setShow = props.setShow;
  const setEdit = props.setEdit;
  const setEditID = props.setEditID;
  const allUsers = props.allUsers;
  const setUsers = props.setUsers;
  const [tipoVacuna, setTipoVacuna] = useState("");
  const [estadoVacunacion, setEstadoVacunacion] = useState("");
  const [fechaVacunacionDesde, setFechaVacunacionDesde] = useState();
  const [fechaVacunacionHasta, setFechaVacunacionHasta] = useState();

  const handleChange = (e, callback) => {
    callback(e.target.value);
  };
  // filters
  useEffect(() => {
    setUsers(filterbyVaccineStatus());
  }, [estadoVacunacion]);

  useEffect(() => {
    setUsers(filterbyVaccinetype());
  }, [tipoVacuna]);
  useEffect(() => {
    let filtered = allUsers;
    console.log("filtering");
    if (fechaVacunacionDesde) filtered = filterbyVaccineStartDate(allUsers);
    if (fechaVacunacionHasta) filtered = filterbyVaccineEndDate(filtered);
    setUsers(filtered);
  }, [fechaVacunacionDesde, fechaVacunacionHasta]);

  // filters handlers

  const filterbyVaccineStatus = () => {
    // on empty filter reset
    if (estadoVacunacion === "Estado de vacunación") return allUsers;
    return allUsers.filter((user) => {
      return !estadoVacunacion
        .toString()
        .localeCompare(user.estadoVacunacion.toString());
    });
  };

  const filterbyVaccinetype = () => {
    // on empty filter reset
    if (tipoVacuna === "") return allUsers;
    return allUsers.filter((user) => {
      return !tipoVacuna.toString().localeCompare(user.tipoVacuna.toString());
    });
  };
  const filterbyVaccineStartDate = (data = allUsers) => {
    // on empty filter reset
    if (!fechaVacunacionDesde) return data;
    return data.filter((user) => {
      return new Date(user.fechaVacuna) >= fechaVacunacionDesde;
    });
  };
  const filterbyVaccineEndDate = (data = allUsers) => {
    // on empty filter reset
    if (!fechaVacunacionHasta) return allUsers;
    return data.filter((user) => {
      return new Date(user.fechaVacuna) <= fechaVacunacionHasta;
    });
  };

  return (
    <div className="full-window">
      <h2 className="text-header">Lista de empleados</h2>
      <header className="App-header">
        <div className="container-header">
          <div className="container-child-left">
            <div className="mx-5">
              <div className="text-center">Filtrar por:</div>
              <Form.Select
                aria-label="Default select example"
                value={estadoVacunacion}
                onChange={(e) => {
                  handleChange(e, setEstadoVacunacion);
                }}
              >
                <option>Estado de vacunación</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </Form.Select>
            </div>
          </div>

          <div className="container-child-left">
            <div className="mx-5">
              <div className="text-center">Filtrar por:</div>
              <Form.Select
                aria-label="Default select example"
                value={tipoVacuna}
                onChange={(e) => {
                  handleChange(e, setTipoVacuna);
                }}
              >
                <option value={""}>Tipo de vacuna:</option>
                <option value={"Sputnik"}>Sputnik</option>
                <option value={"AstraZeneca"}>AstraZeneca</option>
                <option value={"Pfizer"}>Pfizer</option>
                <option value={"Jhonson&Jhonson"}>Jhonson&Jhonson</option>
              </Form.Select>
            </div>
          </div>

          <div className="container-child-left">
            <div className="text-center">
              <div> Filtrar por fechas de vacunación:</div>
              <div className="d-flex">
                <DatePicker
                  placeholderText="Desde"
                  className="text-center mx-5 border border-white rounded"
                  selected={fechaVacunacionDesde}
                  onChange={(date) => setFechaVacunacionDesde(date)}
                />
                <DatePicker
                  className="text-center mx-5 border border-white rounded"
                  placeholderText="Hasta"
                  selected={fechaVacunacionHasta}
                  onChange={(date) => setFechaVacunacionHasta(date)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-child-right my-5">
          <button
            className="button-nuevo"
            onClick={() => {
              setShow(true);
              setEdit(false);
              setEditID(0);
            }}
            id="buttonNuevoId"
          >
            <div className="icon">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div className="button-texto">Registrar nuevo empleado</div>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
