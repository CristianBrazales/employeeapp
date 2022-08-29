import { useState, useEffect } from "react";
import "./styles/createForm.css";
import { FiSave } from "react-icons/fi";
import { XIcon } from "@heroicons/react/solid";
import Alert from "react-bootstrap/Alert";
import {
  validateCedula,
  validateCorreo,
  validateNombresApellidos,
} from "../utils";
import { createUser, getUserInfo, updateUser } from "../services/API";
function CreateForm(props) {
  let isEdit = props?.isEdit;
  let editID = props?.editID;

  const [cedula, setCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [displayAlert, setDisplayAlert] = useState(false);

  const [displayAlertMessage, setDisplayAlertMessage] = useState("");

  const refreshData = props.refreshData;

  const setAllStates = (
    nombres = "",
    apellidos = "",
    cedula = "",
    correo = ""
  ) => {
    setNombres(nombres);
    setApellidos(apellidos);
    setCedula(cedula);
    setCorreo(correo);
  };

  //load data from the api
  useEffect(() => {
    if (isEdit) {
      (async () => {
        let userData = await getUserInfo(props.editID);
        console.log(userData);
        setAllStates(
          userData.nombres,
          userData.apellidos,
          userData.cedula,
          userData.email
        );
      })();
    }
    return () => {};
  }, [editID]);
  // validate on each section
  useEffect(() => {
    setButtonDisabled(!validate());
  }, [cedula, nombres, apellidos, correo]);

  const handleChange = (e, callback) => {
    callback(e.target.value);
  };
  // remove form
  const onCancel = () => {
    props.setShow(false);
  };
  // submit handler

  const onSubmit = async () => {
    if (!validate()) {
      return;
    } else if (isEdit) {
      let response = await updateUser(editID, {
        nombres,
        apellidos,
        cedula,
        correo,
        email: correo,
      });
      if (response.status === 200) {
        setDisplayAlert(true);
        setDisplayAlertMessage("Usuario actualizado correctamente");
        setTimeout(() => {
          setDisplayAlert(false);
        }, 2000);
        refreshData();
      }
    } else {
      let response = await createUser({ nombres, apellidos, cedula, correo });
      if (response.status === 201) {
        setDisplayAlert(true);
        setDisplayAlertMessage("Usuario creado correctamente");
        setAllStates();
        setTimeout(() => {
          setDisplayAlert(false);
        }, 2000);
        refreshData();
      }
    }
  };
  // return true on a valid form
  const validate = () => {
    return (
      validateCedula(cedula) &&
      validateCorreo(correo) &&
      validateNombresApellidos(nombres) &&
      validateNombresApellidos(apellidos)
    );
  };
  return (
    <div className="main-container">
      {displayAlert && (
        <div className="alert-custom">
          <Alert className="alert-custom">{displayAlertMessage}</Alert>
        </div>
      )}
      {!isEdit && <h3 className="title">Nuevo empleado</h3>}
      {isEdit && <h3 className="title">Editar empleado</h3>}

      <div className="note">
        Usuarios y claves generadas automaticamente, Usuario: correo electronico{" "}
      </div>
      <div className="note">
        Clave: primera palabra del nombre más su numero de cedula (ie
        Ramiro0123456789)
      </div>
      <div className="float-container-form display-flex-center ">
        <div className="float-child-form">
          <span className="texto-form display-flex-center" id="nombre">
            Nombres:
          </span>
          <input
            className="input-form-register"
            value={nombres}
            onChange={(e) => {
              handleChange(e, setNombres);
            }}
            required={true}
          ></input>
        </div>
        <div className="float-child-form">
          <span className="texto-form display-flex-center" id="nombre">
            Apellidos:
          </span>
          <input
            className="input-form-register"
            value={apellidos}
            onChange={(e) => {
              handleChange(e, setApellidos);
            }}
            required={true}
          ></input>
        </div>
      </div>
      <div className="float-container-form display-flex-center ">
        <div className="float-child-form">
          <span className="texto-form display-flex-center" id="nombre">
            Cedula:
          </span>
          <input
            className="input-form-register"
            value={cedula}
            onChange={(e) => {
              handleChange(e, setCedula);
            }}
            required={true}
          ></input>
        </div>
        <div className="float-child-form">
          <span className="texto-form display-flex-center" id="nombre">
            Correo:
          </span>
          <input
            className="input-form-register"
            value={correo}
            onChange={(e) => {
              handleChange(e, setCorreo);
            }}
            required={true}
          ></input>
        </div>
      </div>

      <div className="button-container">
        <button
          className="button-form"
          onClick={onSubmit}
          disabled={buttonDisabled}
        >
          <FiSave className="icon-form"></FiSave> Guardar
        </button>
        <button className="button-form" onClick={onCancel}>
          <XIcon className="icon-form"></XIcon>Cancelar
        </button>
      </div>
    </div>
  );
}

export default CreateForm;
