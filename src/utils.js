export const validateCorreo = function (correo) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
};

export const validateCedula = function (cedula) {
  let num = Number(cedula);
  // validate uniqueness agains backend//
  return cedula.length === 10 && Number.isInteger(num) && num > 0;
};

export const validateNombresApellidos = function (str) {
  return !(containsNumber(str) || containsSpecialChars(str));
};

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function containsNumber(str) {
  return /\d/.test(str);
}
export const generateOptionNavBar = function (roles) {
  let options = [];
  if (roles.find((role) => role === "ADMIN")) {
    options.push({ name: "Panel de administrador", reference: "admin" });
  }
  if (roles.find((role) => role === "USER")) {
    options.push({ name: "Panel de usuario", reference: "user" });
  }
  return options;
};
